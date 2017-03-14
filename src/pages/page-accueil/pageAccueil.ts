import { Component } from '@angular/core';
import { GW2APIProvider } from '../../providers/gw2-api-provider'
import { NavController , AlertController } from 'ionic-angular';
import { Vibration } from 'ionic-native';

@Component({
  selector: 'page-pageAccueil',
  templateUrl: 'pageAccueil.html',
  providers : [GW2APIProvider]
})
export class pageAccueil {

  appKey : any;

  slides : Array<any>

  constructor(public navCtrl: NavController , public alertCtrl : AlertController ,public service : GW2APIProvider) {

    this.slides = [
      {
        title: "Welcome to the Docs!",
        description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/background2.jpg",
      },
      {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "assets/img/background2.jpg",
      },
      {
        title: "What is Ionic Cloud?",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/img/background2.jpg",
      }
    ];
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
