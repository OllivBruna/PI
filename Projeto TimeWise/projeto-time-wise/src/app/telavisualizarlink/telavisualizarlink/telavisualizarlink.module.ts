import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelavisualizarlinkPageRoutingModule } from './telavisualizarlink-routing.module';

import { TelavisualizarlinkPage } from './telavisualizarlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelavisualizarlinkPageRoutingModule
  ],
  declarations: [TelavisualizarlinkPage]
})
export class TelavisualizarlinkPageModule {}
