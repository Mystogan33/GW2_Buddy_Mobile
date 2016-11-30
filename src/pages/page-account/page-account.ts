import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api-provider';
import { GuildPage } from '../guild-page/guild-page';

@Component({
  selector: 'page-page-account',
  templateUrl: 'page-account.html',
  providers: [GW2APIProvider]
})
export class AccountPage {

  Account : any;

  AccountId : any;
  AccountName : any;
  AccountWorld : any;

  AccountGuilds : any;
  GuildsInformations : Array<{name : string , tag : string}> = [];

  AccountCreation : any;
  AccountExtension : any;
  AccountCommander : any;
  AccountFractalLevel : any;
  AccountWvWRank : any;

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
        this.AccountExtension = data.access;
        this.AccountCommander = data.commander;
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

        this.GuildsInformations.push({name : data.name , tag: data.tag});

      },

      err => {

        alert(err);

      },
    );
  }

  getGuild(guild)
  {
    this.navCtrl.push(GuildPage , {item : guild});
  }

}
