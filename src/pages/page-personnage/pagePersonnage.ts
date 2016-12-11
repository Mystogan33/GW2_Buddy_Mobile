import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api-provider';
import {GuildPage} from '../guild-page/guild-page';

@Component({
  selector: 'page-pagePersonnage',
  templateUrl: 'pagePersonnage.html',
  providers: [GW2APIProvider]
})
export class PagePersonnagePage {

  character : any;

  CharacterName : any;
  CharacterRace : any;
  CharacterGenre : any;
  CharacterProfession : any;
  CharacterLevel : any;
  CharacterGuild : Array<{name : string , tag : string , id : string}> = [];
  CharacterAge : any;
  CharacterCreation : any;
  CharacterDeaths : any;

  CharacterCrafting : Array<{discipline : string , rating : string , active : string}> = [];

  constructor(public navCtrl: NavController , public navParams : NavParams , public serv: GW2APIProvider) {

    this.character = this.navParams.get('character');
    this.getCharacterInformations();
  }

  getCharacterInformations()
  {

    this.serv.getCharacterInformations(this.character).subscribe(

      data => {

        this.CharacterName = data.name;
        this.CharacterRace = data.race;
        this.CharacterGenre = data.gender;
        this.CharacterProfession = data.profession;
        this.CharacterLevel = data.level;

        this.getGuildName(data.guild);

        this.CharacterAge = data.age;
        this.CharacterCreation = this.convertDate(data.created);
        this.CharacterDeaths = data.deaths;
        this.CharacterCrafting = data.crafting;

      },

      err => {

        alert(err);

      },
    );
  }

  isActive(value)
  {
    if(value == false)
    {
      return "Non";
    }
    else
    {
      return "Oui";
    }
  }

    convertDate(date)
    {
      let TDateSplit = date.split("T");
      let ZDateSplit = TDateSplit[1].split("Z");
      return TDateSplit[0]+" "+ZDateSplit[0];
    }

    getGuildName(guild)
    {
      this.serv.getGuildInformations(guild).subscribe(

        data => {

          this.CharacterGuild.push({name : data.name , tag: data.tag , id : data.id});

        },

        err => {

          alert(err);

        },
      );
    }

    goToGuild(guild)
    {
      this.navCtrl.push(GuildPage , {idGuild : guild});
    }

}
