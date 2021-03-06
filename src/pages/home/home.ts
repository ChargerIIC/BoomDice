import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { Avatar } from "../../model/avatar";
import { DiceRollerPageComponent } from "../dice-roller-page/dice-roller-page";
import { AvatarRepositoryProvider } from "../../providers/avatar-repository/avatar-repository";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

  public avatars : Array<Avatar> = []

  constructor(public navCtrl: NavController, private avatarRepository : AvatarRepositoryProvider) {
    this.avatars = this.avatarRepository.GetAvailableAvatars();
  }

  selectAvatar(avatar){
    this.navCtrl.push(DiceRollerPageComponent, {Avatar: avatar});
  }
}
