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
  result: string;
  avatarImg: HTMLImageElement;
  canvasCxt: CanvasRenderingContext2D;

  constructor(navParams: NavParams) {
    this.avatar = navParams.get('Avatar');
    this.roll();
  }

  ngOnInit() {
    console.log(this.content);
    this.canvasCxt = this.canvasRef.nativeElement.getContext('2d');
    this.avatarImg = new Image();
    this.avatarImg.src = this.avatar.imgPath;

    var cxt = this.canvasCxt;
    var cnvs = this.canvasRef;
    //var cntnt = this.content;
    var img = this.avatarImg;

    this.avatarImg.onload = function() {
      var imgW = img.width/10;
      var imgH = img.height/10;
      cxt.drawImage(img, cnvs.nativeElement.width/2-imgW-10, cnvs.nativeElement.height-imgH-10, imgW,imgH);
      };
  }

  roll(){
    var res = Math.floor(Math.random() * 20) + 1;
    this.result = this.convertResultToDice(res);
    console.log(res + ' ' + this.result);
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
