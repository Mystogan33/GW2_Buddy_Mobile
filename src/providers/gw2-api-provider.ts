import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GW2APIProvider {

  constructor(public http: Http) {

  }

  getAccount(appKey): Observable<any> {

    console.log(appKey);
    return this.http.get('https://api.guildwars2.com/v2/account?access_token='+appKey)
    .map(res => res.json());

    }

  getCharacters(appKey): Observable<any> {

      console.log(appKey);
      return this.http.get('https://api.guildwars2.com/v2/characters?access_token='+appKey)
      .map(res => res.json());

      }

}
