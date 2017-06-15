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
    var avatar = new Avatar();
    avatar.name = 'BoomCat';
    avatar.imgPath = 'assets/img/avatar/cat/Walk (1).png';
    this.avatars.push(avatar);
  }

  selectAvatar(avatar){
    console.log(avatar.name + ' selected.');
    //this.modalCtrl.create(DicePageComponent, {Avatar: avatar}).present();
    this.navCtrl.push(DiceRollerPageComponent, {Avatar: avatar});
  }
}
