import { Component , ViewChild} from '@angular/core';
import { NavController , LoadingController , Select , PopoverController } from 'ionic-angular';
import { GW2APIProvider } from '../../providers/gw2-api/gw2-api';
import {PagePersonnagePage} from '../page-personnage/pagePersonnage';
import {GuildPage} from '../guild-page/guild-page';
import {PopOverItemPage} from '../pop-over-item/pop-over-item';

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
  CharacterGenre : string;
  CharacterProfession : any;
  CharacterProfessionIcon : any;
  CharacterLevel : any;
  CharacterGuild : Array<{name : string , tag : string , id : string}> = [];
  CharacterAge : any;
  CharacterCreation : any;
  CharacterDeaths : any;
  CharacterTitle : any;

  CharacterCrafting : Array<{discipline : string , rating : string , active : string}> = [];

  CharacterEquipment : Array<any> = [];

  CharacterInventory : Array<{BagsDetails : any , content : any}> = [];

  constructor(public navCtrl: NavController , public serv : GW2APIProvider , public loadingCtrl : LoadingController , public popOverCtrl : PopoverController) {

  }

  ionViewCanEnter() {

    return new Promise((resolve, reject) => {

      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
        <div style="background-color: transparent ; background : transparent">
          <img src="assets/img/loader.gif">
        </div>`
      });

      loading.present();

      this.serv.getCharacters().subscribe(

        data => {

          this.characters = data;

          setTimeout(() => {
            loading.dismiss();
            resolve(this.characters);
          }, 2000);


        },

        err => {

          alert(err);

        },
      );

    });
  }

  ionViewDidEnter() {
    this.selectPersonnage.open();
  }

  changeCharacter() {
    this.getCharacterInformations();
  }

  logOut() {
    localStorage.removeItem('appKey');
  }

  getCharacterInformations() {

    this.serv.getCharacterInformations(this.selectedCharacter).subscribe(

      data => {

        // Core
        this.CharacterName = data.name;
        this.CharacterRace = data.race;
        this.CharacterGenre = data.gender;
        this.CharacterGenre = this.CharacterGenre.toLowerCase();
        this.CharacterProfession = data.profession;
        this.getIconProfession(data.profession);
        this.CharacterLevel = data.level;
        this.getGuildName(data.guild);
        this.getTitleInformations(data.title);
        this.CharacterAge = data.age / 86400;
        this.CharacterAge = parseFloat(this.CharacterAge).toFixed(2);
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

  convertDate(date) {
    let TDateSplit = date.split("T");
    let ZDateSplit = TDateSplit[1].split("Z");
    return TDateSplit[0]+" "+ZDateSplit[0];
  }

  getGuildName(guild) {

    if(guild != undefined) {
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

  getIconProfession(profession) {
    if(profession != undefined)
    {
      this.serv.getIconProfession(profession).subscribe(

        data => {

          this.CharacterProfessionIcon = data.icon_big;
          console.log(this.CharacterProfessionIcon);

        },

        err => {

          alert(err);

        },
      );
    }

  }

  getInventory()
  {
    this.serv.getInventory(this.selectedCharacter).subscribe(

      data => {

        let bags = data.bags;

        this.CharacterInventory = [];

        for(var i = 0 ; i < bags.length ; i++)
        {
          let inventory = bags[i].inventory;
          let BagsInventory : any = [];

          this.serv.getItemInformations(bags[i].id).subscribe(
            data => {

              for(var j = 0 ; j < inventory.length ; j++)
              {
                let item = inventory[j];

                if(item != null)
                {
                  let count = item.count;

                  this.serv.getItemInformations(item.id).subscribe(data => {
                    BagsInventory.push({count : count , itemDetails : data });
                  });

                }
                else
                {
                  console.log("Vide");
                  BagsInventory.push({count : null});
                }
              }

              this.CharacterInventory.push({BagsDetails : data , content : BagsInventory});
            });

          }
        },
        err => {
          alert(err);
        }
      );
    }

    openItemDescription(item , event)
    {
      let popover = this.popOverCtrl.create(PopOverItemPage , {item : item});
      popover.present({ev: event});
    }

  }
