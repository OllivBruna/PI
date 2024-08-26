import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Telacadastrar1Page } from './telacadastrar1.page';

const routes: Routes = [
  {
    path: '',
    component: Telacadastrar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Telacadastrar1PageRoutingModule {}
