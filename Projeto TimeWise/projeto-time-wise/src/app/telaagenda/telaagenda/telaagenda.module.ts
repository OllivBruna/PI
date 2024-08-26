import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaagendaPageRoutingModule } from './telaagenda-routing.module';

import { TelaagendaPage } from './telaagenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaagendaPageRoutingModule
  ],
  declarations: [TelaagendaPage]
})
export class TelaagendaPageModule {}
