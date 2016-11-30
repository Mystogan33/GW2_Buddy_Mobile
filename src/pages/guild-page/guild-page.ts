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
  name : any;
  YoloTest : any;
  lvl : any;
  msg : any;
  influ : any;
  aether : any;
  rez : any;
  faveur : any;
  tag : any;
  emblem : any; //<--! faire le tableau-->

  GuildsInformations : Array<{name : string , tag : string , id : string}> = [];

  constructor(public navCtrl: NavController , public navParams: NavParams, public serv: GW2APIProvider) {

    this.guildName = this.navParams.get('idGuild');
    this.getGuildInformations();
  }

  logOut(){
    localStorage.removeItem('appKey');
  }

  getGuildInformations()
  {
    this.serv.getGuildInformations(this.guildName.id).subscribe(
      data => {
      this.lvl = data.level;
      this.name = data.name;
      this.msg = data.motd;
      this.influ = data.influence;
      this.aether = data.aetherium;
      this.rez = data.resonance;
      this.faveur = data.favor;
      this.tag = data.tag;
                                                                  //this.emblem = data. de coté celui la;
      },
      err => {
        alert(err);
      },
    );
  }



}
