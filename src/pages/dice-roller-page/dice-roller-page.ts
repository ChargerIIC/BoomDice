import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavParams, Content } from "ionic-angular";
import { Avatar } from "../../model/avatar";

@Component({
  selector: 'dice-roller-page',
  templateUrl: 'dice-roller-page.html',
})
export class DiceRollerPageComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild('avatarImage') avatarRef: ElementRef;

  avatar: Avatar;
  result: number;
  avatarImg: HTMLImageElement;
  bgImagePath: string;

  constructor(navParams: NavParams) {
    this.avatar = navParams.get('Avatar');
    this.roll();
  }

  ngOnInit() {
  }

  roll(){
    var res = Math.floor(Math.random() * 20) + 1;
    console.log(res);

    if(res <=5){
      this.bgImagePath = 'redflame_animated.gif';
    } else if(res <= 10){
      this.bgImagePath = 'Blue_flame_animated_Low.gif';
    }else if(res <= 15){
      this.bgImagePath = 'Blue_Fire_Burn_Animated.gif';
    }else if(res <=19){
      this.bgImagePath = 'Blue_Fire_Burn_Animated.gif';
    }
    else{
      this.bgImagePath = 'Blue_Fire_Burn_Animated.gif';
    }

    this.result =  res;
  }

}
