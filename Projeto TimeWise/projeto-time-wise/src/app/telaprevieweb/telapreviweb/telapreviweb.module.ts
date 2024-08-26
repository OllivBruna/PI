import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelapreviwebPageRoutingModule } from './telapreviweb-routing.module';

import { TelapreviwebPage } from './telapreviweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelapreviwebPageRoutingModule
  ],
  declarations: [TelapreviwebPage]
})
export class TelapreviwebPageModule {}
