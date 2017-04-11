import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , LoadingController , ToastController , PopoverController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { AccountPage } from '../pages/page-account/page-account';
import {MesPersonnagesPage} from '../pages/mes-personnages/mes-personnages';
import {MesGuildesPage} from '../pages/mes-guildes/mes-guildes';
import {FinishersPage} from '../pages/finishers/finishers';
import {MyWalletPage} from '../pages/my-wallet/my-wallet';
import {MinisPage} from '../pages/minis/minis';
import {PopOverPage} from '../pages/pop-over/pop-over';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = pageAccueil;
  params : Array<{name: string , tag : string , id : string}> = [];
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen , public loadingCtrl : LoadingController , public toastCtrl : ToastController , public popoverCtrl : PopoverController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: pageAccueil},
      { title: 'Mon compte', component: AccountPage},
      { title: 'Mes Personnages', component: MesPersonnagesPage},
      { title: 'Mes guildes' , component: MesGuildesPage},
      { title: 'Mes finishers' , component: FinishersPage},
      { title: 'Mon portefeuille' , component : MyWalletPage},
      { title: 'Mini-Pets' , component : MinisPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  presentToast()
  {
    let toast = this.toastCtrl.create({
      message : 'Tu dois tout d\'abord entrer ta clé d\'application pour accéder aux fonctionnalités de l\'application.'+
      'Si tu ne sais pas comment faire , suis le tutoriel sur la page d\'accueil :D',
      position : 'bottom',
      showCloseButton : true,
      closeButtonText : 'Ok :)',
      cssClass : "toast-container"
    });

    toast.present();
  }

  openPage(page) {
    if(localStorage.getItem('appKey') == null)
    {
      this.presentToast();
    }
    else
    {
      this.nav.setRoot(page.component);
    }
  }
}
