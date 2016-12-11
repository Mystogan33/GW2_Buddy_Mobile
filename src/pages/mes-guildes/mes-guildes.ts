import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GW2APIProvider}  from '../../providers/gw2-api-provider';
import {GuildPage} from '../guild-page/guild-page';

@Component({
  selector: 'page-mes-guildes',
  templateUrl: 'mes-guildes.html',
  providers : [GW2APIProvider]
})
export class MesGuildesPage {

  AccountGuilds : any;
  GuildsInformations : Array<{name : string , tag : string , id : string}> = [];

  constructor(public navCtrl: NavController , public serv: GW2APIProvider){

    this.getGuilds();
  }

  getGuilds() {

    this.serv.getAccount().subscribe(

      data => {

        this.AccountGuilds = data.guilds;

        for(var i = 0 ; i < this.AccountGuilds.length ; i++)
        {
          this.getGuildName(this.AccountGuilds[i]);
        }

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

  goToGuild(guild)
  {
    this.navCtrl.push(GuildPage , {idGuild : guild});
  }

}
