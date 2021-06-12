import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';

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
  providers: [Camera]
})
export class EditaIngredientePageRoutingModule {}
