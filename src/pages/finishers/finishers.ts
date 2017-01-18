import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';


@Component({
  selector: 'page-finishers',
  templateUrl: 'finishers.html'
})
export class FinishersPage {

  idFinish : any;
  permanent : any;


  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public serv: GW2APIProvider
  ) {

      this.getFinishersInformation();
  }


  ionViewDidLoad() {
    console.log('Hello FinishersPage Page');
  }


getFinishersInformation(){
  this.serv.getFinishersInformation(idFinishers.id).subscribe(
    data => {
    this.idFinish = data.id;
    this.permanent = data.permanant;                                                           //this.emblem = data. de coté celui la;
    },
    err => {
      alert(err);
    },
  );
}

 //spartaaaaaaaaaaaaaaaa

   openMenu() {



     let actionSheet = this.actionsheetCtrl.create({
       title: this.idFinish,
       cssClass: 'action-sheets-basic-page',
       buttons: [
         {
           text: 'Delete',
           role: 'destructive',
           icon: !this.platform.is('ios') ? 'trash' : null,
           handler: () => {
             console.log('Delete clicked');
           }
         },
         {
           text: 'Share',
           icon: !this.platform.is('ios') ? 'share' : null,
           handler: () => {
             console.log('Share clicked');
           }
         },
         {
           text: 'Play',
           icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
           handler: () => {
             console.log('Play clicked');
           }
         },
         {
           text: 'Favorite',
           icon: !this.platform.is('ios') ? 'heart-outline' : null,
           handler: () => {
             console.log('Favorite clicked');
           }
         },
         {
           text: 'Cancel',
           role: 'cancel', // will always sort to be on the bottom
           icon: !this.platform.is('ios') ? 'close' : null,
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });
     actionSheet.present();
   }
 // plouf
/*
 getFinishersInformation()
 {

   this.serv.getFinishersInformation(this.).subscribe(
     data => {
     this.idFinish = data.id;
     this.permanent = data.permanant;                                                           //this.emblem = data. de coté celui la;
     },
     err => {
       alert(err);
     },
   );
 }
*/

}
