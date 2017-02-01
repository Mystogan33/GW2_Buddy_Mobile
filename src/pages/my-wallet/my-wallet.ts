import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';

@Component({
  selector: 'page-my-wallet',
  templateUrl: 'my-wallet.html',
  providers:[GW2APIProvider]
})

export class MyWalletPage {

  Currencies : Array<{name : string , amount : string , img : string}> = [];

  constructor(public navCtrl: NavController , public serv : GW2APIProvider) {

    this.getWallet();

  }

  logOut(){

    localStorage.removeItem('appKey');

  }

  getWallet()
  {
    this.serv.getMyWallet().subscribe(

      data => {

        let response : Array<any> = data;

        for(var i = 0 ; i < response.length ; i++)
        {
          this.getCurrenciesInfos(response[i]);
        }

      },

      err => {

        alert(err);

      },
    );
  }

  getCurrenciesInfos(currency : any)
  {
    this.serv.getCurrency(currency.id).subscribe(

      data => {

        this.Currencies.push({name : data.name , amount : currency.value , img : data.icon});

      },
      err => {

        alert(err);

      },
    );
  }

}
