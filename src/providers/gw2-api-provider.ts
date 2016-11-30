import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GW2APIProvider {

  appKey : any;

  constructor(public http: Http) {

    this.appKey = localStorage.getItem('appKey');

  }

  getAccount(): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/account?access_token='+this.appKey)
    .map(res => res.json());

  }

  getCharacters(): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/characters?access_token='+this.appKey)
    .map(res => res.json());

  }

  getGuildInformations(idGuild): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/guild/'+idGuild+'?access_token='+this.appKey)
    .map(res => res.json());

  }

}
