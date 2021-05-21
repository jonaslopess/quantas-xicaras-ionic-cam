import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.page.html',
  styleUrls: ['./ingredientes.page.scss'],
})
export class IngredientesPage implements OnInit {

  ingredientes : Ingrediente[] 
  
  constructor(private ingredienteService : IngredienteService) {
    this.ingredientes = this.ingredienteService.getIngredientes()
  }

  ngOnInit() {
  }

}
