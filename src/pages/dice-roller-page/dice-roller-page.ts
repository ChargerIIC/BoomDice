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
  result: string;
  numberResult: number
  avatarImg: HTMLImageElement;
  bgImagePath: string;

  constructor(navParams: NavParams) {
    this.avatar = navParams.get('Avatar');
    this.roll();
  }

  ngOnInit() {
  }

  roll(){
    this.numberResult = Math.floor(Math.random() * 20) + 1;
    this.result = this.convertResultToDice(this.numberResult);

    if(this.numberResult <=5){
      this.bgImagePath = 'Blue_flame_animated_Low.gif';
    } else if(this.numberResult <= 10){
      this.bgImagePath = 'blue-fire-flames_animated_med.gif';
    }else if(this.numberResult <= 15){
      this.bgImagePath = 'blue-fire-flames_animated_med.gif';
    }else if(this.numberResult <=19){
      this.bgImagePath = 'Blue_Fire_Burn_Animated.gif';
    }
    else{
      this.bgImagePath = 'Blue_Fire_Burn_Animated.gif';
    }

    console.log(this.numberResult + ' ' + this.result);
  }

  convertResultToDice(res: number) : string
  {     
      switch(res){
        case 1:
          return 'A';
        case 2:
          return 'B';
        case 3:
          return 'C';
        case 4:
          return 'D';
        case 5:
          return 'E';
        case 6:
          return 'F';
        case 7:
          return 'G';
        case 8:
          return 'H';
        case 9:
          return 'I';
        case 10:
          return 'J';
        case 11:
          return 'K';
        case 12:
          return 'L';
        case 13:
          return 'M';
        case 14:
          return 'N';
        case 15:
          return 'O';
        case 16:
          return 'P';
        case 17:
          return 'Q';
        case 18:
          return 'R';
        case 19:
          return 'S';
        case 20:
          return 'T';          
      }

      var result = res.toString();
      return result;
  }

}
