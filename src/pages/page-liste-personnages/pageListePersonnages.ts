import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {GW2APIProvider} from '../../providers/gw2-api-provider';

@Component({
  selector: 'page-pageListePersonnages',
  templateUrl: 'pageListePersonnages.html',
  providers: [GW2APIProvider]
})
export class pageListePersonnages {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams , public serv : GW2APIProvider) {

    this.getCharacters();

  }

  itemTapped(event, item) {
  }

  getCharacters()
  {
  }

}
