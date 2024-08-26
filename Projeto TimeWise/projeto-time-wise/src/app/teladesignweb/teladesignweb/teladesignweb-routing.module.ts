import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeladesignwebPage } from './teladesignweb.page';

const routes: Routes = [
  {
    path: '',
    component: TeladesignwebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeladesignwebPageRoutingModule {}
