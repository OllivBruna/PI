import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelasuportePageRoutingModule } from './telasuporte-routing.module';

import { TelasuportePage } from './telasuporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelasuportePageRoutingModule
  ],
  declarations: [TelasuportePage]
})
export class TelasuportePageModule {}
