import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelacriarservicoPageRoutingModule } from './telacriarservico-routing.module';

import { TelacriarservicoPage } from './telacriarservico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelacriarservicoPageRoutingModule
  ],
  declarations: [TelacriarservicoPage]
})
export class TelacriarservicoPageModule {}
