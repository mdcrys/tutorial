import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiosPage } from './citios.page';

const routes: Routes = [
  {
    path: '',
    component: CitiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitiosPageRoutingModule {}
