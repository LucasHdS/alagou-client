import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { CreateFloodPointPage } from '../create-flood-point/create-flood-point'
import { FloodPointDetailsPage } from '../flood-point-details/flood-point-details'
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage: any;
  aboutPage: any;
  createFloodPointPage: any;
  floodPointsDetailsPage: any;
  constructor() {
    this.homePage = HomePage;
    this.aboutPage = AboutPage;
    this.createFloodPointPage = CreateFloodPointPage
    this.floodPointsDetailsPage = FloodPointDetailsPage;
  }
}
