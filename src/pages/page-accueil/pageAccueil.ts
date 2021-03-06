import { Component } from '@angular/core';
import { GW2APIProvider } from '../../providers/gw2-api/gw2-api'
import { NavController , AlertController , ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-pageAccueil',
  templateUrl: 'pageAccueil.html',
  providers: [GW2APIProvider]
})
export class pageAccueil {

  appKey : any;

  slides : Array<any>

  constructor(public navCtrl: NavController , public alertCtrl : AlertController , public service : GW2APIProvider , public toastCtrl : ToastController , private iab: InAppBrowser) {

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
      cssClass : 'alertDanger-title',
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
          },

        },
        {
          text: 'Enregistrer',
          handler: data => {
            localStorage.setItem('appKey',data.keyField);
            this.presentToast();
          }
        }
      ]
    });

    prompt.present();

  }

  presentToast()
  {
    let toast = this.toastCtrl.create({
      message : 'La clé à été entrée avec succès ! Tu peux désormais accéder aux fonctionnalités de l\'application.',
      position : 'bottom',
      showCloseButton : true,
      closeButtonText : 'Ok :)',
      cssClass : "toast-container"
    });

    toast.present();
  }

  openBrowser()
  {
      let browser = this.iab.create('https://account.arena.net/applications', '_system' , 'location=yes');
      browser.show();
  }

  goToTwitter()
  {
    let browser = this.iab.create('https://twitter.com/guildwars2', '_system' , 'location=yes');
    browser.show();
  }

  goToFacebook()
  {
    let browser = this.iab.create('https://www.facebook.com/GuildWars2/', '_system' , 'location=yes');
    browser.show();
  }

  goToYoutube()
  {
    let browser = this.iab.create('https://www.youtube.com/user/arenanetofficial', '_system' , 'location=yes');
    browser.show();
  }

  logOut(){

    localStorage.removeItem('appKey');

  }

}
