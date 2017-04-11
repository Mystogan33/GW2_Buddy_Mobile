import { Component } from '@angular/core';
import { NavController,  NavParams } from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api/gw2-api';

@Component({
  selector: 'page-minis',
  templateUrl: 'minis.html',
  providers:[GW2APIProvider]
})
export class MinisPage {

  miniTab : Array <any>;
  infoMiniTab : Array <{ icon : string , name : string }> = [];
  cloneMiniTab : Array <{ icon : string , name : string }> = [];
  searchQuery: string = '';
  items: any[];


  constructor(public navCtrl: NavController, public serv: GW2APIProvider,
  public navParams: NavParams) {
    this.getMinis();
  }

  ionViewDidLoad() {
    console.log('Hello MinisPage Page');
  }

  logOut(){

    localStorage.removeItem('appKey');

  }

  getMinis(){
    this.serv.getMyMinis().subscribe(
      data => {

        this.miniTab = data;
       for(var i = 0; i < this.miniTab.length; i++)
        {
          this.getMiniInformation(this.miniTab[i]);
          }
      },
      err => {
        alert(err);
      },
    );

  }

  getMiniInformation(idMini){
    this.serv.getMinisInformation(idMini).subscribe(
      data => {
      this.infoMiniTab.push({icon:data.icon,name:data.name});
      this.cloneMiniTab = this.infoMiniTab;
      },
      err => {
        alert(err);
      },
    );
  }

  // **************************************test search bar ********************************


  initializeItems() {
      //this.items = this.infoMiniTab;
      /*for(var i = 0; i < this.infoMiniTab.length; i++)
       {
         this.items.push(this.infoMiniTab[i].name);
       }*/

       this.infoMiniTab = this.cloneMiniTab;

    }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items

  /*  if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } */

    if (val && val.trim() != '') {
        this.infoMiniTab = this.infoMiniTab.filter((castor) => {
          return (castor.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }

  }
//*****************fin test search***
}
