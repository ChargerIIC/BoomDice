import { Injectable } from '@angular/core';

import { Avatar } from "../../model/avatar";

/*
 This provider represents our model, storing information about each of the available avatars.
*/
@Injectable()
export class AvatarRepositoryProvider {

  avatars : Array<Avatar> = []

  constructor() {

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

    avatar = {
      name: 'White Knight',
      lowImgPath: 'assets/img/avatar/knight/Knight_Death_NoLoop.gif', //need to create a good failure animation
      medImgPath: 'assets/img/avatar/knight/Knight_Idle_Loop.gif',
      highImgPath: 'assets/img/avatar/knight/Knight_Attack_Loop.gif',
      cFailureImgPath: 'assets/img/avatar/knight/Knight_Death_NoLoop.gif',
      cSuccessImgPath: 'assets/img/avatar/knight/Knight_JumpAttack_Loop.gif',
      cFailureSound: '162457__kastenfrosch__verloren.mp3',
      cSuccessSound: '113989__kastenfrosch__gewonnen.mp3',
    };
    this.avatars.push(avatar);

    avatar = {
      name: 'Magi Cat',
      lowImgPath: 'assets/img/avatar/magicat/magicatfail.gif', 
      medImgPath: 'assets/img/avatar/magicat/magicatlow.gif',
      highImgPath: 'assets/img/avatar/magicat/magicathigh.gif',
      cFailureImgPath: 'assets/img/avatar/magicat/magicatfail.gif',
      cSuccessImgPath: 'assets/img/avatar/magicat/magicatsuccess.gif',
      cFailureSound: '162457__kastenfrosch__verloren.mp3',
      cSuccessSound: '113989__kastenfrosch__gewonnen.mp3',
    };
    this.avatars.push(avatar);

  }

  public GetAvailableAvatars() : Array<Avatar>{
    return this.avatars;
  }

}
