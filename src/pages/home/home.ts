import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

  private avatars = [
    { name: 'BoomCat', imgPath: '../../assets/img/avatar/cat/Walk (1).png'}
  ]

  constructor(public navCtrl: NavController) {

  }

  selectAvatar(avatar){
    console.log(avatar.name + ' selected.');
  }
}
