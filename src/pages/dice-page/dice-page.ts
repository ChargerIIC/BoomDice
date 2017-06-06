import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Avatar } from "../../model/avatar";

/**
 * Generated class for the DicePageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dice-page',
  templateUrl: 'dice-page.html'
})
export class DicePageComponent {

  avatar: Avatar;
  result: number;

  constructor(navParams: NavParams) {
    this.avatar = navParams.get('Avatar');
    this.roll();
  }

  roll(){
    var res = Math.floor(Math.random() * 20) + 1;
    console.log(res);

    this.result =  res;
  }

}
