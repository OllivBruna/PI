import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelapersonalizacaoPage } from './telapersonalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: TelapersonalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelapersonalizacaoPageRoutingModule {}
