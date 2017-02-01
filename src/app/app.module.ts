import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { AccountPage } from '../pages/page-account/page-account';
import { GuildPage } from '../pages/guild-page/guild-page';
import {PagePersonnagePage} from '../pages/page-personnage/pagePersonnage';
import {MesPersonnagesPage} from '../pages/mes-personnages/mes-personnages';
import {MesGuildesPage} from '../pages/mes-guildes/mes-guildes';
import {FinishersPage} from '../pages/finishers/finishers';
import {MyWalletPage} from '../pages/my-wallet/my-wallet';
import{MinisPage} from '../pages/minis/minis';



@NgModule({
  declarations: [
    MyApp,
    pageAccueil,
    AccountPage,
    GuildPage,
    PagePersonnagePage,
    MesPersonnagesPage,
    MesGuildesPage,
    FinishersPage,
    MyWalletPage,
    MinisPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pageAccueil,
    AccountPage,
    GuildPage,
    PagePersonnagePage,
    MesPersonnagesPage,
    MesGuildesPage,
    FinishersPage,
    MyWalletPage,
    MinisPage
  ],
  providers: []
})
export class AppModule {}
