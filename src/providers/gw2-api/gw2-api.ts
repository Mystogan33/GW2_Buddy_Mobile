import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GW2APIProvider {

  appKey : any;

  guilds : any;

  constructor(public http: Http) {

    this.appKey = localStorage.getItem('appKey');

  }

  // Personnages
  getCharacters(): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/characters?access_token='+this.appKey)
    .map(res => res.json());
  }

  // Compte
  getAccount(): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/account?access_token='+this.appKey)
    .map(res => res.json());

  }

  getGuildInformations(idGuild): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/guild/'+idGuild+'?access_token='+this.appKey)
    .map(res => res.json());
  }

  getIconProfession(profession): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/professions/'+profession+'?access_token='+this.appKey)
    .map(res => res.json());
  }

  getTitleInformations(title): Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/titles/'+title+'?access_token='+this.appKey)
    .map(res => res.json());

  }

  getCharacterInformations(idCharacter): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/characters/'+idCharacter+'?access_token='+this.appKey)
    .map(res => res.json());

  }

  // Inventaire
  getInventory(character) {
    return this.http.get('https://api.guildwars2.com/v2/characters/'+character+'/inventory?access_token='+this.appKey)
    .map(res => res.json());
  }

  getItemInformations(idItem): Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/items/'+idItem)
    .map(res => res.json());
  }

  // Stuff
  getStuff(character)
  {
    return this.http.get('https://api.guildwars2.com/v2/characters/'+character+'/equipment?access_token='+this.appKey)
    .map(res => res.json());
  }

  // Finishers
  getMyFinishers() : Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/account/finishers?access_token='+this.appKey+'&lang=fr')
    .map(res => res.json());
  }

  getFinishersInformation(idFinishers): Observable<any> {

    return this.http.get('https://api.guildwars2.com/v2/finishers/'+idFinishers+'?access_token='+this.appKey+'&lang=fr')
    .map(res => res.json());
  }

  // Portefeuille
  getMyWallet(): Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/account/wallet?access_token='+this.appKey)
    .map(res => res.json());
  }

  getCurrency(currency): Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/currencies/'+currency+'?access_token='+this.appKey+'&lang=fr')
    .map(res => res.json());
  }

  // Minis
  getMyMinis() : Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/account/minis?access_token='+this.appKey)
    .map(res => res.json());
  }

  getMinisInformation(idMinis): Observable<any> {
    return this.http.get('https://api.guildwars2.com/v2/minis/'+idMinis+'?access_token='+this.appKey)
    .map(res => res.json());
  }

}
