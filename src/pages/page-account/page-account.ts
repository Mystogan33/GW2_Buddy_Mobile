import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api/gw2-api';
import { GuildPage } from '../guild-page/guild-page';
import { PagePersonnagePage } from '../page-personnage/pagePersonnage';

@Component({
  selector: 'page-page-account',
  templateUrl: 'page-account.html',
  providers:[GW2APIProvider]
})
export class AccountPage {

  Account : any;

  AccountId : any;
  AccountName : any;
  AccountWorld : any;

  AccountGuilds : any;
  GuildsInformations : Array<{name : string , tag : string , id : string}> = [];

  AccountCreation : any;
  AccountExtension : any;
  AccountCommander : any;
  AccountDailyAP : any;
  AccountFractalLevel : any;
  AccountWvWRank : any;

  characters: Array<{nom: string}> = [];

  constructor(public navCtrl: NavController , public serv: GW2APIProvider) {

    this.getAccount();
  }

  getAccount() {

    this.serv.getAccount().subscribe(

      data => {

        this.Account = data;
        this.AccountName = data.name;
        this.AccountGuilds = data.guilds;

        for(var i = 0 ; i < this.AccountGuilds.length ; i++)
        {
          this.getGuildName(this.AccountGuilds[i]);
        }

        this.AccountCreation = data.created;
        this.AccountCreation = this.convertDate(this.AccountCreation);
        this.AccountExtension = data.access;
        this.AccountCommander = data.commander;
        this.AccountDailyAP = data.daily_ap;
        this.AccountFractalLevel = data.fractal_level;
        this.AccountWvWRank = data.wvw_rank;

      },

      err => {

        alert(err);

      },

    );
  }

  logOut()
  {
    localStorage.removeItem('appKey');
  }

  isCommander()
  {
    if(this.AccountCommander == false)
    {
      return "Non";
    }
    else
    {
      return "Oui";
    }
  }

  hasExtension(){

    if(this.AccountExtension =="HeartOfThorns")
    {
      return "Heart Of Thorns";
    }
    else
    {
      return "Jeu de base";
    }

  }

  getGuildName(idGuild)
  {
    this.serv.getGuildInformations(idGuild).subscribe(

      data => {

        this.GuildsInformations.push({name : data.name , tag: data.tag , id : data.id});

      },

      err => {

        alert(err);

      },
    );
  }

  convertDate(date)
  {
    let TDateSplit = date.split("T");
    let ZDateSplit = TDateSplit[1].split("Z");
    return TDateSplit[0]+" "+ZDateSplit[0];
  }

}
