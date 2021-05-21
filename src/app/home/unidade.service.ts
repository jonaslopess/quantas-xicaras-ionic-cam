import { Injectable } from '@angular/core';
import { Unidade } from './unidade';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {
  unidades : Unidade[]

  constructor() {
    this.unidades = [
			new Unidade(1,"grama(s)", -1),
			new Unidade(2,"mililitro(s)", 1),
			new Unidade(3,"xícara(s) (240ml)", 240),
			new Unidade(4,"colher(es) de sopa (15ml)", 15),
			new Unidade(5,"colher(es) de chá (5ml)", 5)
		]
  }
  
  public getUnidades() : Unidade[] {
      return this.unidades;
  }

  getUnidade(id:number){
		if(this.unidades == undefined)
			return null
		for(let u of this.unidades){
			if(u.id == id){
				return u;
			}
		}
		return null
	}
}
