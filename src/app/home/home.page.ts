import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../ingrediente/ingrediente';
import { IngredienteService } from '../ingrediente/ingrediente.service';
import { Unidade } from './unidade';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  unidades : Unidade[]
  ingredientes : Ingrediente[]
  valorConvertido : string

  onSubmit(form){
    let unidade_entrada : Unidade = this.getUnidade(
      Number(form.value.unidade_entrada)
    )
    let unidade_saida : Unidade = this.getUnidade(
      Number(form.value.unidade_saida)
    )
    let quantidade_entrada : number = Number(form.value.quantidade_entrada)
    let regra_conversao : number = this.ingredienteService.getIngrediente(form.value.ingrediente).regra_conversao

    this.valorConvertido = unidade_saida.converter(unidade_entrada,quantidade_entrada,regra_conversao)

  }

  getUnidade(id:number){
    for(let u of this.unidades){
      if(u.id == id){
        return u;
      }
    }
    return null;
  }
  
  constructor(private ingredienteService : IngredienteService) { 
    this.ingredientes = ingredienteService.getIngredientes()
  }

  ngOnInit(): void {
    this.unidades = [
      new Unidade(1,"grama(s)", -1),
      new Unidade(2,"mililitro(s)", 1),
      new Unidade(3,"xícara(s) (240ml)", 240),
      new Unidade(4,"colher(es) de sopa (15ml)", 15),
      new Unidade(5,"colher(es) de chá (5ml)", 5)
    ]
    this.valorConvertido = "Insira a medida a ser convertida"

  }

}
