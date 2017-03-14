import { Component , ViewChild } from '@angular/core';
import { NavController , LoadingController ,  NavParams, Tabs } from 'ionic-angular';
import {GuildPage} from '../guild-page/guild-page';
import {GW2APIProvider} from '../../providers/gw2-api-provider';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-mes-guildes',
  templateUrl: 'mes-guildes.html',
})
export class MesGuildesPage {

  guildRoot = GuildPage;
  listGuilds : any = [];
  GuildsIds : any;

  constructor(public navCtrl : NavController , public navParams : NavParams , public serv : GW2APIProvider , public http : Http , public loadingCtrl : LoadingController)
  {

  }

  ionViewCanEnter() {

    return new Promise((resolve, reject) => {

        let loading = this.loadingCtrl.create({
          spinner: 'crescent',
          content: 'Chargement des guildes...'
        });

        loading.present();

        this.serv.getAccount()
          .subscribe(
            (res)=> {

              this.GuildsIds = res.guilds;

              this.GuildsIds.forEach(idGuilds =>
              {
                this.http.get('https://api.guildwars2.com/v2/guild/'+idGuilds+'?access_token='+localStorage.getItem('appKey'))
                .map(res => res.json())
                .subscribe(
                  (GuildName) => {
                    this.listGuilds.push(GuildName);
                    resolve(this.listGuilds);
                  },
                );
              });

            loading.dismiss();

            },
            (err)=>{
              reject(err)
            }
          );

    });
  }

}
