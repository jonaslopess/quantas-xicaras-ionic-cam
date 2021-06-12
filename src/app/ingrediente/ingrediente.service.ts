import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  ingredientes : Ingrediente[]

  constructor(private storage : Storage) {
    this.init(); 
    this.ingredientes = [];
  }

  private async init(){
    this.storage = await this.storage.create();
    //this.storage.clear();
    //await this.storage.set('0', new Ingrediente('0',"Farinha", 0.5, "../../../assets/farinha.png"));
    //await this.storage.set('1', new Ingrediente('1',"Leite", 1, "../../../assets/leite.png"));
    //await this.storage.set('2', new Ingrediente('2', "Açúcar", 0.8, "../../../assets/acucar.png"));
  }

  public async getIngredientes() {
    return await this.storage.forEach((value : Ingrediente) =>{
      this.ingredientes.push(value);
    })
    .then(()=>{
      Ingrediente.maxid = this.ingredientes.length;
      return Promise.resolve(this.ingredientes);
    })
    .catch((error)=>{
      return Promise.reject(error);
    })
  }

  public getIngrediente(i : number) {
    return this.storage.get(String(i))
    .then((value : Ingrediente)=>{
      return Promise.resolve(value);
    })
    .catch((error)=>{
      return Promise.reject(error);
    });
  }

  public addIngrediente(nome: string, regra_conversao: number, img: string){
    let key = String(Ingrediente.maxid);
    let ingrediente = new Ingrediente(key, nome,regra_conversao, img);
    this.ingredientes.push(ingrediente);
    Ingrediente.maxid += 1;
    return this.save(key, ingrediente);
  }

  private save(key : string, ingrediente : Ingrediente){
    return this.storage.set(key,ingrediente);
  }

  public editIngrediente(id : number, ingrediente : Ingrediente){
    let key = String(id);
    this.ingredientes[id] = ingrediente;
    return this.save(key, ingrediente);
  }

  public remove(id : number) {
    let key = String(id)
    let i = this.ingredientes.findIndex(({id})=>{id === key})
    this.ingredientes.splice(i,1)
    return this.storage.remove(key);
  }

}