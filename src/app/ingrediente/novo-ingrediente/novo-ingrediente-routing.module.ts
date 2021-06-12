import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';

import { NovoIngredientePage } from './novo-ingrediente.page';

const routes: Routes = [
  {
    path: '',
    component: NovoIngredientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [Camera]
})
export class NovoIngredientePageRoutingModule {}
