import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavParams, Content } from "ionic-angular";
import { Avatar } from "../../model/avatar";

@Component({
  selector: 'dice-page',
  templateUrl: 'dice-page.html'
})
export class DicePageComponent implements OnInit {

  @ViewChild('canvas') canvasRef: ElementRef;
  @ViewChild(Content) content: Content;

  avatar: Avatar;
  result: number;
  avatarImg: HTMLImageElement;
  canvasCxt: CanvasRenderingContext2D;

  constructor(navParams: NavParams) {
    this.avatar = navParams.get('Avatar');
    this.roll();
  }

  ngOnInit() {
    console.log(this.content);
    //this.canvasRef.nativeElement.width = this.content.contentWidth;
    this.canvasCxt = this.canvasRef.nativeElement.getContext('2d');
    this.avatarImg = new Image();
    this.avatarImg.src = this.avatar.imgPath;

    var cxt = this.canvasCxt;
    //var cnvs = this.canvasRef;
    // var cntnt = this.content;
    var img = this.avatarImg;

    this.avatarImg.onload = function() {
      cxt.drawImage(img, 1, 1);
      };
  }

  roll(){
    var res = Math.floor(Math.random() * 20) + 1;
    console.log(res);

    this.result =  res;
  }

}
