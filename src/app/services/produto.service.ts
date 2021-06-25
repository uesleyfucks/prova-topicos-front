import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarComponent } from '../components/views/listar/listar.component';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL = "http://localhost:1234/";


  constructor(private http:HttpClient) { }
    listar(): Observable<Produto[]>{
      return this.http.get<Produto[]>(`${this.baseURL}produto/listar/`);
    }

    cadastrar(produto: Produto):Observable<Produto>{
      return this.http.post<Produto>(`${this.baseURL}produto/cadastrar/`, produto);
    }
}
