import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelapersonalizacaoPageRoutingModule } from './telapersonalizacao-routing.module';

import { TelapersonalizacaoPage } from './telapersonalizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelapersonalizacaoPageRoutingModule
  ],
  declarations: [TelapersonalizacaoPage]
})
export class TelapersonalizacaoPageModule {}
