import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoIngredientePageRoutingModule } from './novo-ingrediente-routing.module';

import { NovoIngredientePage } from './novo-ingrediente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoIngredientePageRoutingModule
  ],
  declarations: [NovoIngredientePage]
})
export class NovoIngredientePageModule {}
