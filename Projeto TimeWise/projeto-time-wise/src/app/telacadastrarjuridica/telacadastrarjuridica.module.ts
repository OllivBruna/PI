import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelacadastrarjuridicaPageRoutingModule } from './telacadastrarjuridica-routing.module';

import { TelacadastrarjuridicaPage } from './telacadastrarjuridica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelacadastrarjuridicaPageRoutingModule
  ],
  declarations: [TelacadastrarjuridicaPage]
})
export class TelacadastrarjuridicaPageModule {}
