import { Injectable } from '@angular/core';
import { produtos, Produto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: Produto [] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id == produtoId);

  }
}
