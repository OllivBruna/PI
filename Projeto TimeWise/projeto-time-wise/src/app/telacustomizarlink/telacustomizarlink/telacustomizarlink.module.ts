import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelacustomizarlinkPageRoutingModule } from './telacustomizarlink-routing.module';

import { TelacustomizarlinkPage } from './telacustomizarlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelacustomizarlinkPageRoutingModule
  ],
  declarations: [TelacustomizarlinkPage]
})
export class TelacustomizarlinkPageModule {}
