import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PagePersonnage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pagePersonnage',
  templateUrl: 'pagePersonnage.html'
})
export class PagePersonnagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PagePersonnagePage Page');
  }

}
