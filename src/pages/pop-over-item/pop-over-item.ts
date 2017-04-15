import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pop-over-item',
  templateUrl: 'pop-over-item.html',
})
export class PopOverItemPage {

  item : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = this.navParams.get('item');

  }

}
