import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Avatar } from "../../model/avatar";
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { Shake } from '@ionic-native/shake';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'dice-roller-page',
  templateUrl: 'dice-roller-page.html',
})
export class DiceRollerPageComponent implements OnInit {

  isRolling: boolean = false;
  avatar: Avatar;
  result: string;
  numberResult: number
  bgImagePath: string;
  avatarImagePath: string;

  constructor(navParams: NavParams, private vibMotor: Vibration, private nativeAudio: NativeAudio, private shake: Shake) {
    this.avatar = navParams.get('Avatar');
    this.avatarImagePath = this.avatar.medImgPath;
    this.loadSounds();
    if(this.shake != null)
    {
    const watch = this.shake.startWatch(60).subscribe(() => {
      this.roll();
      });
    }
    this.roll();
  }

  ngOnInit() {
  }

  roll(){
    this.isRolling = true;
    this.vibMotor.vibrate(0); //stop any current motor work
    Observable.interval(1000).take(1).subscribe(()=> {
      this.isRolling = false;
    });

    this.nativeAudio.play('diceRoll');
    this.numberResult = Math.floor(Math.random() * 20) + 1; //fetch dice result
    this.result = this.convertResultToDice(this.numberResult); //create result for dice font

    if(this.numberResult ==1){
      //critical failue
      this.bgImagePath = 'Blue_flame_animated_Low.gif';
      this.avatarImagePath = this.avatar.cFailureImgPath;
      this.nativeAudio.play('failure');
    } else if(this.numberResult <=5){
      this.bgImagePath = 'Blue_flame_animated_Low.gif';
      this.avatarImagePath = this.avatar.lowImgPath;
    } else if(this.numberResult <= 15){
      this.bgImagePath = 'Blue_Fire_Burn_Animated.gif';
      this.avatarImagePath = this.avatar.medImgPath;
    }else if(this.numberResult <=19){
      this.bgImagePath = 'blue-fire-flames_animated_med.gif';
      this.avatarImagePath = this.avatar.highImgPath;
    }
    else{
      this.bgImagePath = 'blue-fire-flames_animated_med.gif';
      this.avatarImagePath = this.avatar.cSuccessImgPath;
      this.nativeAudio.play('success');
      this.vibMotor.vibrate(1000); //1 second
    }
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

  loadSounds(){
        this.nativeAudio.preloadSimple('diceRoll', 'assets/audio/162456__kastenfrosch__dice.mp3');
        this.nativeAudio.preloadSimple('success', `assets/audio/${this.avatar.cSuccessSound}`);
        this.nativeAudio.preloadSimple('failure', `assets/audio/${this.avatar.cFailureSound}`);        
  }
}
