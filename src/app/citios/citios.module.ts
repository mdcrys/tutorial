import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitiosPageRoutingModule } from './citios-routing.module';

import { CitiosPage } from './citios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitiosPageRoutingModule
  ],
  declarations: [CitiosPage]
})
export class CitiosPageModule {}
