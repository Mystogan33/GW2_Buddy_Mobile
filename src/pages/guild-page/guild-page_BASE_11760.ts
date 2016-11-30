import { Component } from '@angular/core';
import { NavController ,  NavParams } from 'ionic-angular';

@Component({
  selector: 'page-guild-page',
  templateUrl: 'guild-page.html'
})
export class GuildPage {

  guildName : any;

  constructor(public navCtrl: NavController , public navParams: NavParams) {

    this.guildName = this.navParams.get('item');
  }


  logOut(){
    localStorage.removeItem('appKey');
  }
}
