import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelacadastrarfuncionarioPage } from './telacadastrarfuncionario.page';

const routes: Routes = [
  {
    path: '',
    component: TelacadastrarfuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelacadastrarfuncionarioPageRoutingModule {}
