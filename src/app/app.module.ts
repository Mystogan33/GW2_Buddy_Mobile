import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { AccountPage } from '../pages/page-account/page-account';
import { GuildPage } from '../pages/guild-page/guild-page';
import {MesPersonnagesPage} from '../pages/mes-personnages/mes-personnages';
import {MesGuildesPage} from '../pages/mes-guildes/mes-guildes';
import {FinishersPage} from '../pages/finishers/finishers';
import {MyWalletPage} from '../pages/my-wallet/my-wallet';
import {MinisPage} from '../pages/minis/minis';
import {PopOverPage} from '../pages/pop-over/pop-over';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    pageAccueil,
    AccountPage,
    GuildPage,
    MesPersonnagesPage,
    MesGuildesPage,
    FinishersPage,
    MyWalletPage,
    MinisPage,
    PopOverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pageAccueil,
    AccountPage,
    GuildPage,
    MesPersonnagesPage,
    MesGuildesPage,
    FinishersPage,
    MyWalletPage,
    MinisPage,
    PopOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
