import { Component } from '@angular/core';
import { NavController ,  NavParams } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';

@Component({
  selector: 'page-guild-page',
  templateUrl: 'guild-page.html',
  providers: [GW2APIProvider]
})
export class GuildPage {

  guildName : any;
  YoloTest : any;
  GuildsInformations : Array<{name : string , tag : string}> = [];

  constructor(public navCtrl: NavController , public navParams: NavParams, public serv: GW2APIProvider) {

    this.guildName = this.navParams.get('idGuild');
  }


  logOut(){
    localStorage.removeItem('appKey');
  }


  getGuildInformations(idGuild)
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

}
