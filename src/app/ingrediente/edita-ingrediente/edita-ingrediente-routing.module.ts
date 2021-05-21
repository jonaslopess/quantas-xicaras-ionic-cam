import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaIngredientePage } from './edita-ingrediente.page';

const routes: Routes = [
  {
    path: '',
    component: EditaIngredientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaIngredientePageRoutingModule {}
