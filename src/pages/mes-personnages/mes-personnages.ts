import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';
import {PagePersonnagePage} from '../page-personnage/pagePersonnage';

@Component({
  selector: 'page-mes-personnages',
  templateUrl: 'mes-personnages.html',
  providers: [GW2APIProvider]
})
export class MesPersonnagesPage {

 characters: Array<{nom: string}> = [];

  constructor(public navCtrl: NavController , public serv : GW2APIProvider) {

    this.getCharacters();

  }

  logOut()
  {
    localStorage.removeItem('appKey');
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

  goToCharacter(character)
  {
    this.navCtrl.push(PagePersonnagePage , {character : character});
  }

}
