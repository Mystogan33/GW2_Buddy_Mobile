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
  infoFinishTab : Array <{ icon : string , name : string , unlock_details : string}> = [];



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


getFinishersInformation(idFinishers){
  this.serv.getFinishersInformation(idFinishers).subscribe(
    data => {
    this.infoFinishTab.push({icon:data.icon,name:data.name,unlock_details:data.unlock_details});                                                        //this.emblem = data. de coté celui la;
    },
    err => {
      alert(err);
    },
  );
}

getFinishers(){

  this.serv.getMyFinishers().subscribe(
    data => {

      this.finisherTab = data;
     for(var i = 0; i < this.finisherTab.length; i++)
      {
        this.getFinishersInformation(this.finisherTab[i].id);
        }

    },
    err => {
      alert(err);
    },
  );
}

   openMenu(finisherDesc) {



     let actionSheet = this.actionsheetCtrl.create({
       title: finisherDesc.name,
       cssClass: 'action-sheets-basic-page',
       buttons: [
         {
           text:  finisherDesc.unlock_details ,

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
