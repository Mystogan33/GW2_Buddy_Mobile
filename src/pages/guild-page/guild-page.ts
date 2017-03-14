import { Component } from '@angular/core';
import { NavController ,  NavParams } from 'ionic-angular';

@Component({
  selector: 'page-guild-page',
  templateUrl: 'guild-page.html',
})
export class GuildPage {

  guild : string;

  constructor(public navCtrl: NavController , public navParams : NavParams) {

    this.guild = this.navParams.get('guild');

  }

  logOut()
  {
    localStorage.removeItem('appKey');
  }

}
