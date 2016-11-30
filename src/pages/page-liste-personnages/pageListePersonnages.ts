import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {GW2APIProvider} from '../../providers/gw2-api-provider';

@Component({
  selector: 'page-pageListePersonnages',
  templateUrl: 'pageListePersonnages.html',
  providers: [GW2APIProvider]
})
export class pageListePersonnages {


  characters: Array<{nom: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , public serv : GW2APIProvider) {

    this.getCharacters();

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

}
