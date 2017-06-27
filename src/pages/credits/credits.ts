import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Credit } from "../../model/credit";

/**
 * Generated class for the CreditsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-credits',
  templateUrl: 'credits.html',
})
export class CreditsPage {

  credits : Array<Credit> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {  
  }

  ionViewWillLoad() {
    var credit = new Credit();
    credit.type = 'Audio';
    credit.name = 'Kastenfrosch';
    credit.uri = 'https://freesound.org/people/Kastenfrosch/'
    this.credits.push(credit);
    credit = new Credit();
    credit.type = 'Graphics';
    credit.name = 'Zuhria Alfitra';
    credit.uri = 'http://www.gameart2d.com/'
    this.credits.push(credit);
    credit = new Credit();
    credit.type = 'Font';
    credit.name = '(In Memory of) Neale Davidson';
    credit.uri = 'http://www.pixelsagas.com'
    this.credits.push(credit);
  }

  launchBrowser(creditUri: string){
    //this.appBrowser.create(creditUri);
  }

}
