import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelasuportePage } from './telasuporte.page';

const routes: Routes = [
  {
    path: '',
    component: TelasuportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelasuportePageRoutingModule {}
