import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , LoadingController , PopoverController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { AccountPage } from '../pages/page-account/page-account';
import {MesPersonnagesPage} from '../pages/mes-personnages/mes-personnages';
import {MesGuildesPage} from '../pages/mes-guildes/mes-guildes';
import {FinishersPage} from '../pages/finishers/finishers';
import {MyWalletPage} from '../pages/my-wallet/my-wallet';
import {MinisPage} from '../pages/minis/minis';
import {PopOverPage} from '../pages/pop-over/pop-over';
import {GW2APIProvider} from '../providers/gw2-api-provider';

@Component({
  templateUrl: 'app.html',
  providers: [GW2APIProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = pageAccueil;
  params : Array<{name: string , tag : string , id : string}> = [];
  pages: Array<{title: string, component: any}>;
  AccountGuilds : Array<{title : string , icon : string , params : {data : any}}> = [];

  constructor(public platform: Platform , public loadingCtrl : LoadingController , public popoverCtrl : PopoverController , public serv : GW2APIProvider) {
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
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {

      this.nav.setRoot(page.component)

    }

  }
