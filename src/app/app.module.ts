import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { pageAccueil } from '../pages/page-accueil/pageAccueil';
import { pageListePersonnages } from '../pages/page-liste-personnages/pageListePersonnages';

@NgModule({
  declarations: [
    MyApp,
    pageAccueil,
    pageListePersonnages
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pageAccueil,
    pageListePersonnages
  ],
  providers: []
})
export class AppModule {}
