import { Component } from '@angular/core';
import { NavController,  NavParams } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';
/*
  Generated class for the Minis page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-minis',
  templateUrl: 'minis.html',
  providers: [GW2APIProvider]
})
export class MinisPage {

  miniTab : Array <any>;
  infoMiniTab : Array <{ icon : string , name : string }> = [];


  constructor(public navCtrl: NavController,public serv: GW2APIProvider,
  public navParams: NavParams) {
    this.getMinis();
  }

  ionViewDidLoad() {
    console.log('Hello MinisPage Page');
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
      this.infoMiniTab.push({icon:data.icon,name:data.name});                                                        //this.emblem = data. de coté celui la;
      },
      err => {
        alert(err);
      },
    );
  }

}
