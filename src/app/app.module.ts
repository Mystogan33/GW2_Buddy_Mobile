import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { pageListePersonnages } from '../pages/page-liste-personnages/pageListePersonnages';
import { AccountPage } from '../pages/page-account/page-account';

@NgModule({
  declarations: [
    MyApp,
    pageAccueil,
    pageListePersonnages,
    AccountPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pageAccueil,
    pageListePersonnages,
    AccountPage
  ],
  providers: []
})
export class AppModule {}
