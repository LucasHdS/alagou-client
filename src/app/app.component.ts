import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  template: '<ion-nav #nav [root]="rootPage"></ion-nav>'
})


export class MyApp {

  @ViewChild('nav') nav: NavController;
  public rootPage: any = TabsPage;
  constructor(platform: Platform, public statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
 
      if(platform.is('android')){
        statusBar.overlaysWebView(false);
      }
    });
  }
}

