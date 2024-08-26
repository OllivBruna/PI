import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelamenuPageRoutingModule } from './telamenu-routing.module';

import { TelamenuPage } from './telamenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelamenuPageRoutingModule
  ],
  declarations: [TelamenuPage]
})
export class TelamenuPageModule {}
