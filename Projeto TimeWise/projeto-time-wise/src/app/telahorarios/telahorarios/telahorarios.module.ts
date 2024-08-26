import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelahorariosPageRoutingModule } from './telahorarios-routing.module';

import { TelahorariosPage } from './telahorarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelahorariosPageRoutingModule
  ],
  declarations: [TelahorariosPage]
})
export class TelahorariosPageModule {}
