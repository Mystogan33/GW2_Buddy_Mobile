import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Minis page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-minis',
  templateUrl: 'minis.html'
})
export class MinisPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MinisPage Page');
  }

}
