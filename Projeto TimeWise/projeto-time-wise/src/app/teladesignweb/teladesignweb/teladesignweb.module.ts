import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeladesignwebPageRoutingModule } from './teladesignweb-routing.module';

import { TeladesignwebPage } from './teladesignweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeladesignwebPageRoutingModule
  ],
  declarations: [TeladesignwebPage]
})
export class TeladesignwebPageModule {}
