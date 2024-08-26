import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelapreviwebPage } from './telapreviweb.page';

const routes: Routes = [
  {
    path: '',
    component: TelapreviwebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelapreviwebPageRoutingModule {}
