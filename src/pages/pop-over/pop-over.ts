import { Component } from '@angular/core';
import { NavController , ViewController } from 'ionic-angular';


@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html'
})
export class PopOverPage {

  constructor(public navCtrl: NavController , public viewCtrl : ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}
