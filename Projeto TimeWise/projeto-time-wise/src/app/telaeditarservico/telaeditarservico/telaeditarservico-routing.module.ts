import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaeditarservicoPage } from './telaeditarservico.page';

const routes: Routes = [
  {
    path: '',
    component: TelaeditarservicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaeditarservicoPageRoutingModule {}
