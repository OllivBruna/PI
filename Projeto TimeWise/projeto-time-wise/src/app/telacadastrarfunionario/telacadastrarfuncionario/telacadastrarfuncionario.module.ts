import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelacadastrarfuncionarioPageRoutingModule } from './telacadastrarfuncionario-routing.module';

import { TelacadastrarfuncionarioPage } from './telacadastrarfuncionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelacadastrarfuncionarioPageRoutingModule
  ],
  declarations: [TelacadastrarfuncionarioPage]
})
export class TelacadastrarfuncionarioPageModule {}
