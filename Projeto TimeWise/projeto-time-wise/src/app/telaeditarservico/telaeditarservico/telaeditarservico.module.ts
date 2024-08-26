import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaeditarservicoPageRoutingModule } from './telaeditarservico-routing.module';

import { TelaeditarservicoPage } from './telaeditarservico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaeditarservicoPageRoutingModule
  ],
  declarations: [TelaeditarservicoPage]
})
export class TelaeditarservicoPageModule {}
