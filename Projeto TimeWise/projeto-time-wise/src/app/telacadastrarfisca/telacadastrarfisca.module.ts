import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelacadastrarfiscaPageRoutingModule } from './telacadastrarfisca-routing.module';

import { TelacadastrarfiscaPage } from './telacadastrarfisca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelacadastrarfiscaPageRoutingModule
  ],
  declarations: [TelacadastrarfiscaPage]
})
export class TelacadastrarfiscaPageModule {}
