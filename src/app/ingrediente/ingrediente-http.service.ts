import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteHttpService {

  baseUrl = 'http://localhost:3000/ingredientes'

  constructor(private http : HttpClient) {
  }

  create(ingrediente :Ingrediente) : Observable<Ingrediente>{
    return this.http.post<Ingrediente>(this.baseUrl, ingrediente)
  }

  read() : Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(this.baseUrl)
  }

  readById(id : string) : Observable<Ingrediente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Ingrediente>(url)
  }

  update(ingrediente : Ingrediente) : Observable<Ingrediente> {
    const url = `${this.baseUrl}/${ingrediente.id}`
    return this.http.put<Ingrediente>(url, ingrediente)
  }

  delete(id : string) : Observable<Ingrediente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Ingrediente>(url)
  }
}
