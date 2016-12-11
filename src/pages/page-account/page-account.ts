import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api-provider';
import { GuildPage } from '../guild-page/guild-page';
import { PagePersonnagePage } from '../page-personnage/pagePersonnage';

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
  GuildsInformations : Array<{name : string , tag : string , id : string}> = [];

  AccountCreation : any;
  AccountExtension : any;
  AccountCommander : any;
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
        this.AccountFractalLevel = data.fractal_level;
        this.AccountWvWRank = data.wvw_rank;

        this.getCharacters();

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


  getGuild(guild)
  {
    this.navCtrl.push(GuildPage , {idGuild : guild});
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

  getCharacters()
  {
    this.serv.getCharacters().subscribe(

      data => {

        this.characters = data;

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

  goToCharacter(character)
  {
    this.navCtrl.push(PagePersonnagePage , {character : character});
  }

}
