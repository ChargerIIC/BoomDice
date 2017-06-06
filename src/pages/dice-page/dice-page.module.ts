import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DicePageComponent } from './dice-page';

@NgModule({
  declarations: [
    DicePageComponent,
  ],
  imports: [
    IonicPageModule.forChild(DicePageComponent),
  ],
  exports: [
    DicePageComponent
  ]
})
export class DicePageComponentModule {}
