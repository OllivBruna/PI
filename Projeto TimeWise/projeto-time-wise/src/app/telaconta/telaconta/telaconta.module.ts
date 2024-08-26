import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelacontaPageRoutingModule } from './telaconta-routing.module';

import { TelacontaPage } from './telaconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelacontaPageRoutingModule
  ],
  declarations: [TelacontaPage]
})
export class TelacontaPageModule {}
