import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaavaliacoesPageRoutingModule } from './telaavaliacoes-routing.module';

import { TelaavaliacoesPage } from './telaavaliacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaavaliacoesPageRoutingModule
  ],
  declarations: [TelaavaliacoesPage]
})
export class TelaavaliacoesPageModule {}
