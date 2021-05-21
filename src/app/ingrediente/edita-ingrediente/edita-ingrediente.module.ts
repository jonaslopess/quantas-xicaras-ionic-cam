import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaIngredientePageRoutingModule } from './edita-ingrediente-routing.module';

import { EditaIngredientePage } from './edita-ingrediente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaIngredientePageRoutingModule
  ],
  declarations: [EditaIngredientePage]
})
export class EditaIngredientePageModule {}
