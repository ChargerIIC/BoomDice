import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Avatar } from "../../model/avatar";
import { DiceRollerPageComponent } from "../dice-roller-page/dice-roller-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

  public avatars = []

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    var avatar : Avatar = {
      name: 'BoomCat',
      lowImgPath: 'assets/img/avatar/cat/Cat_Hurt_Loop.gif',
      medImgPath: 'assets/img/avatar/cat/Cat_Idle_Loop.gif',
      highImgPath: 'assets/img/avatar/cat/Cat_Run_Loop.gif',
      cFailureImgPath: 'assets/img/avatar/cat/Cat_Dead_NoLoop.gif',
      cSuccessImgPath: 'assets/img/avatar/cat/Cat_Slide_Loop.gif',
      cFailureSound: '162457__kastenfrosch__verloren.mp3',
      cSuccessSound: '113989__kastenfrosch__gewonnen.mp3',
    };
    this.avatars.push(avatar);
  }

  selectAvatar(avatar){
    console.log(avatar.name + ' selected.');
    this.navCtrl.push(DiceRollerPageComponent, {Avatar: avatar});
  }
}
