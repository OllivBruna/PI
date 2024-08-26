import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelamenuPage } from './telamenu.page';

const routes: Routes = [
  {
    path: '',
    component: TelamenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelamenuPageRoutingModule {}
