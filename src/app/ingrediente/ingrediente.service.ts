import { Injectable } from '@angular/core';

import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  
  private ingredientes : Ingrediente[]

  constructor() { 
    this.ingredientes = [
      new Ingrediente("Farinha", 0.5, "../../../assets/farinha.png"),
      new Ingrediente("Leite", 1, "../../../assets/leite.png"),
      new Ingrediente("Açúcar", 0.8, "../../../assets/acucar.png")
    ]
  }

  getIngredientes(){
    return this.ingredientes;
  }

  getIngrediente(i : number){
    return this.ingredientes[i];
  }

  addIngrediente(nome: string, regra_conversao: number, img: string){
    this.ingredientes.push(new Ingrediente(nome,regra_conversao, img))
  }

  editIngrediente(i : number, nome : string, regra_conversao : number, img : string){
    this.ingredientes[i].nome = nome;
    this.ingredientes[i].regra_conversao = regra_conversao;
    this.ingredientes[i].img = img;
  }

}