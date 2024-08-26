import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Telacadastrar1PageRoutingModule } from './telacadastrar1-routing.module';

import { Telacadastrar1Page } from './telacadastrar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Telacadastrar1PageRoutingModule
  ],
  declarations: [Telacadastrar1Page]
})
export class Telacadastrar1PageModule {}
