import { Component } from '@angular/core';
import { GW2APIProvider } from '../../providers/gw2-api-provider'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pageAccueil',
  templateUrl: 'pageAccueil.html',
  providers : [GW2APIProvider]
})
export class pageAccueil {

  appKey : any;

  constructor(public navCtrl: NavController , public service : GW2APIProvider) {

  }

  getAccount() {

    this.service.getAccount(this.appKey).subscribe(

      data => {

      console.log(data.name);

      },
      err => {

      console.log("Erreur d'authentification")

    },
      () => console.log("Connexion établie")
    );

    this.service.getCharacters(this.appKey).subscribe(

      data => {

      console.log(data.name);

      },
      err => {

      console.log("Erreur d'authentification")

    },
      () => console.log("Connexion établie")
    );

    this.getCharacters();

  }

  getCharacters() {

    this.service.getCharacters(this.appKey).subscribe(

      data => {

      console.log(data);

      },
      err => {

      console.log("Erreur d'authentification")

    },
      () => console.log("Connexion établie")
    );
  }

}
