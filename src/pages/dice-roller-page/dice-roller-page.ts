import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavParams, Content } from "ionic-angular";
import { Avatar } from "../../model/avatar";

@Component({
  selector: 'dice-roller-page',
  templateUrl: 'dice-roller-page.html'
})
export class DiceRollerPageComponent implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild('avatarImage') avatarRef: ElementRef;

  avatar: Avatar;
  result: number;
  avatarImg: HTMLImageElement;

  constructor(navParams: NavParams) {
    this.avatar = navParams.get('Avatar');
    this.roll();
  }

  ngOnInit() {
  }

  roll(){
    var res = Math.floor(Math.random() * 20) + 1;
    console.log(res);
    this.result =  res;
  }

}
