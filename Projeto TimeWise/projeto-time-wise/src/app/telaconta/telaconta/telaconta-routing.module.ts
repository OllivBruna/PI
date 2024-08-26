import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelacontaPage } from './telaconta.page';

const routes: Routes = [
  {
    path: '',
    component: TelacontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelacontaPageRoutingModule {}
