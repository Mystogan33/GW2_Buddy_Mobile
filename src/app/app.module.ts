import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { pageListePersonnages } from '../pages/page-liste-personnages/pageListePersonnages';
import { AccountPage } from '../pages/page-account/page-account';
import { GuildPage } from '../pages/guild-page/guild-page';

@NgModule({
  declarations: [
    MyApp,
    pageAccueil,
    pageListePersonnages,
    AccountPage,
    GuildPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pageAccueil,
    pageListePersonnages,
    AccountPage,
    GuildPage
  ],
  providers: []
})
export class AppModule {}
