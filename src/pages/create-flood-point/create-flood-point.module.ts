import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateFloodPointPage } from './create-flood-point';

@NgModule({
  declarations: [
    CreateFloodPointPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateFloodPointPage),
  ],
})
export class CreateFloodPointPageModule {}
