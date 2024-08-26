import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelahorariosPage } from './telahorarios.page';

const routes: Routes = [
  {
    path: '',
    component: TelahorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelahorariosPageRoutingModule {}
