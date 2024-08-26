import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelavisualizarlinkPage } from './telavisualizarlink.page';

const routes: Routes = [
  {
    path: '',
    component: TelavisualizarlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelavisualizarlinkPageRoutingModule {}
