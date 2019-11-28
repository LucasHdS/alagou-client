import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { MyApp } from './app.component';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx'

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { FloodPointDetailsPage } from '../pages/flood-point-details/flood-point-details';
import { CreateFloodPointPage } from '../pages/create-flood-point/create-flood-point';

import { PointsProvider } from '../providers/points/points';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    FloodPointDetailsPage,
    CreateFloodPointPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    FloodPointDetailsPage,
    CreateFloodPointPage   
  ],
  providers: [
    StatusBar,
    Geolocation,
    UniqueDeviceID,
    Camera,
    FileTransfer,
    File,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PointsProvider
  ]
})
export class AppModule {}
