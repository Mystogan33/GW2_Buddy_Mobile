import { Component , ViewChild} from '@angular/core';
import { NavController , LoadingController , Select } from 'ionic-angular';
import {GW2APIProvider} from '../../providers/gw2-api-provider';
import {PagePersonnagePage} from '../page-personnage/pagePersonnage';
import {GuildPage} from '../guild-page/guild-page';

@Component({
  selector: 'page-mes-personnages',
  templateUrl: 'mes-personnages.html',
  providers: [GW2APIProvider]
})
export class MesPersonnagesPage {

 selectedCharacter : any = undefined;
 selectedCategory : any;
 characters: Array<{nom: string}> = [];

 @ViewChild('selectPersonnage') selectPersonnage: Select;

 CharacterName : any;
 CharacterRace : any;
 CharacterGenre : any;
 CharacterProfession : any;
 CharacterLevel : any;
 CharacterGuild : Array<{name : string , tag : string , id : string}> = [];
 CharacterAge : any;
 CharacterCreation : any;
 CharacterDeaths : any;
 CharacterTitle : any;

 CharacterCrafting : Array<{discipline : string , rating : string , active : string}> = [];

 CharacterEquipment : Array<any> = [];

  constructor(public navCtrl: NavController , public serv : GW2APIProvider , public loadingCtrl : LoadingController) {

  }

  ionViewCanEnter() {

    //return new Promise((resolve, reject) => {

      // let loading = this.loadingCtrl.create({
      //
      //   spinner : 'crescent',
      //   content: 'Chargement des personnages...'
      //   });

      //loading.present();

      this.serv.getCharacters().subscribe(

        data => {

          this.characters = data;
          //resolve(this.characters);

        //  loading.dismiss();

        },

        err => {

          alert(err);

        },
      );

  //  });
  }

  ionViewDidEnter()
  {
    this.selectPersonnage.open();
  }

  changeCharacter()
  {
    this.getCharacterInformations();
  }

  logOut()
  {
    localStorage.removeItem('appKey');
  }

  getCharacterInformations()
  {

    let loading = this.loadingCtrl.create({

      spinner : 'crescent',
      content: 'Chargement du personnage...'
      });

    this.serv.getCharacterInformations(this.selectedCharacter).subscribe(

      data => {

        // Core
        this.CharacterName = data.name;
        this.CharacterRace = data.race;
        this.CharacterGenre = data.gender;
        this.CharacterProfession = data.profession;
        this.CharacterLevel = data.level;
        this.getGuildName(data.guild);
        this.getTitleInformations(data.title);
        this.CharacterAge = data.age;
        this.CharacterCreation = this.convertDate(data.created);
        this.CharacterDeaths = data.deaths;

        // Crafting
        this.CharacterCrafting = data.crafting;

        // Equipments
        this.CharacterEquipment = data.equipment;

        this.selectedCategory = "core";

      },

      err => {

        alert(err);

      },
    );
  }

  getTitleInformations(title)
  {
    if(title != undefined)
    {
      this.serv.getTitleInformations(title).subscribe(

        data => {
          this.CharacterTitle = data.name;

        },
        err => {
          alert(err);
        },
      );
    }

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
      if(guild != undefined)
      {
        this.serv.getGuildInformations(guild).subscribe(

          data => {

            this.CharacterGuild = [];
            this.CharacterGuild.push({name : data.name , tag: data.tag , id : data.id});

          },

          err => {

            alert(err);

          },
        );
      }

    }

    goToGuild(guild)
    {
      this.navCtrl.push(GuildPage , {idGuild : guild});
    }

}
