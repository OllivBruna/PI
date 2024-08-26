import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelacustomizarlinkPage } from './telacustomizarlink.page';

const routes: Routes = [
  {
    path: '',
    component: TelacustomizarlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelacustomizarlinkPageRoutingModule {}
