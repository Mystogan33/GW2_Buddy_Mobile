import { Component } from '@angular/core';
import { GW2APIProvider } from '../../providers/gw2-api-provider'
import { NavController , AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pageAccueil',
  templateUrl: 'pageAccueil.html',
  providers : [GW2APIProvider]
})
export class pageAccueil {

  appKey : any;

  constructor(public navCtrl: NavController , public alertCtrl : AlertController ,public service : GW2APIProvider) {

    this.isConnected();
  }

  isConnected() {
    
    if(localStorage.getItem('appKey')== null)
    {
      this.enterKey();
    }

  }

  enterKey() {
    let prompt = this.alertCtrl.create({
      title: 'Clé d\'authentification',
      inputs: [
        {
          name: 'keyField',
          placeholder: 'Clé d\'application'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enregistrer',
          handler: data => {
            localStorage.setItem('appKey',data.keyField);
            alert('Clé entrée avec succès !');
          }
        }
      ]
    });

    prompt.present();

  }

  logOut(){

    localStorage.removeItem('appKey');

  }

}
