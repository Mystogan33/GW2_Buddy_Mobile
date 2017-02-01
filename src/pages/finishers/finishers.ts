import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';



@Component({
  selector: 'page-finishers',
  templateUrl: 'finishers.html',
  providers: [GW2APIProvider]

})
export class FinishersPage {

  idFinish : any;
  permanent : any;
  quantity : any;
  finisherTab : Array<any>;
  grid : Array<Array<any>>;


  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public serv: GW2APIProvider,
    public navParams: NavParams
  ) {
     this.getFinishers();
     //this.grid = Array(Math.ceil(this.finisherTab.length/3));

  }


  ionViewDidLoad() {
    console.log('Hello FinishersPage Page');

  }


/*getFinishersInformation(){
//  this.serv.getGuildInformations(this.guildName.id).subscribe(
  this.serv.getFinishersInformation(this.idFinishers).subscribe(
    data => {
    this.idFinish = data.id;
    this.permanent = data.permanant;                                                           //this.emblem = data. de coté celui la;
    },
    err => {
      alert(err);
    },
  );
}*/

getFinishers(){

  this.serv.getMyFinishers().subscribe(
    data => {

      this.finisherTab = data;
     for(var i = 0; i < this.finisherTab.length; i++)
      {

      }

    },
    err => {
      alert(err);
    },
  );
}

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


}
