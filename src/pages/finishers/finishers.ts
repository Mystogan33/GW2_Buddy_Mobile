import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, AlertController , ToastController } from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api/gw2-api';



@Component({
  selector: 'page-finishers',
  templateUrl: 'finishers.html',
  providers:[GW2APIProvider]
})
export class FinishersPage {

  idFinish : any;
  permanent : any;
  quantity : any;
  finisherTab : Array<any>;
  infoFinishTab : Array <{icon : string , name : string , unlock_details : string , permanent : boolean}> = [];
  cloneFinishTab : Array <{icon : string , name : string , unlock_details : string , permanent : boolean}> = [];
  isOpenChoice : boolean = false;

  constructor(public navCtrl: NavController, public platform: Platform,
              public alertCtrl: AlertController, public serv: GW2APIProvider,
              public navParams: NavParams , public toastCtrl : ToastController)
  {
     this.getFinishers();
  }

initializeItems() {

     this.infoFinishTab = this.cloneFinishTab;

  }

  logOut(){

    localStorage.removeItem('appKey');

  }

getFinishers(){

  this.serv.getMyFinishers().subscribe(
    data => {

      this.finisherTab = data;
     for(var i = 0; i < this.finisherTab.length; i++)
      {
        this.getFinishersInformation(this.finisherTab[i]);
        }

    },
    err => {
      alert(err);
    },
  );
}

getFinishersInformation(idFinishers)
{
  this.serv.getFinishersInformation(idFinishers.id).subscribe(
    data => {
    this.infoFinishTab.push({icon:data.icon,name:data.name,unlock_details:data.unlock_details,permanent:idFinishers.permanent});
    this.cloneFinishTab = this.infoFinishTab;
    },
    err => {
      alert(err);
    },
  );
}

   openMenu(finisherDesc) {

      let prompt = this.alertCtrl.create({
      title: finisherDesc.name,
      message: finisherDesc.unlock_details,
      cssClass : 'alert-message',
      buttons: [
        {
          text: 'Compris',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    prompt.present();
  }

   displayCheckBox()
   {
     this.isOpenChoice = !this.isOpenChoice;
   }

   getItems(ev: any) {
     // Reset items back to all of the items
     this.initializeItems();

     // set val to the value of the searchbar
     let val = ev.target.value;

     if (val && val.trim() != '') {
         this.infoFinishTab = this.infoFinishTab.filter((finisher) => {
           return (finisher.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
         })
       }

   }

}
