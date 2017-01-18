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

  getCharacterInformations(idCharacter): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/characters/'+idCharacter+'?access_token='+this.appKey)
    .map(res => res.json());

  }

//prend la liste
  getFinishersInformation(idFinishers): Observable<any> {
    return this.http.get('h/ttps://api.guildwars2.com/v2/account/finishers/'+idFinishers+'?access_token='+this.appKey)
    .map(res => res.json());
  }
  // en selectionne un a faire

}
