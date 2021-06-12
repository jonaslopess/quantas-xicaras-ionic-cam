import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../ingrediente';
import { IngredienteHttpService } from '../ingrediente-http.service';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.page.html',
  styleUrls: ['./ingredientes.page.scss'],
})
export class IngredientesPage implements OnInit {

  ingredientes : Ingrediente[]
  
  constructor(
    private ingredienteService : IngredienteService,
    private ingredienteHttpService : IngredienteHttpService
  ) 
  {
    
  }
  
  ionViewWillEnter(){
    this.ingredienteHttpService.read().subscribe(ingredientes => {
      this.ingredientes = ingredientes
    })
  }

  ngOnInit() {
    /*this.ingredienteService.getIngredientes()
    .then(results => {
      this.ingredientes = results;
    });*/   

  }



}
