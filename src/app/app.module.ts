import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreditsPage } from "../pages/credits/credits";

import { DiceRollerPageComponent } from '../pages/dice-roller-page/dice-roller-page';
import { AvatarRepositoryProvider } from '../providers/avatar-repository/avatar-repository';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreditsPage,
    DiceRollerPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreditsPage,
    DiceRollerPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    NativeAudio,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvatarRepositoryProvider
  ]
})
export class AppModule {}
