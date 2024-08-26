import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaavaliacoesPage } from './telaavaliacoes.page';

const routes: Routes = [
  {
    path: '',
    component: TelaavaliacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaavaliacoesPageRoutingModule {}
