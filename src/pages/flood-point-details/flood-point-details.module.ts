import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloodPointDetailsPage } from './flood-point-details';

@NgModule({
  declarations: [
    FloodPointDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FloodPointDetailsPage),
  ],
})
export class FloodPointDetailsPageModule {}
