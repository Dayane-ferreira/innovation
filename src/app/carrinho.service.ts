import { Injectable } from '@angular/core';
import {  ProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itensCarrinho : ProdutoCarrinho [] = [];

  constructor() { }

  getAll(){
    this.itensCarrinho = JSON.parse(localStorage.getItem('carrinho') || "[]");
    return this.itensCarrinho;
  }

  adicionarProduto(produto: ProdutoCarrinho){   
    this.itensCarrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));    
  }

  removerProduto(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter( produto => produto.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho)); 
  }
  
  limparCarrinho(){
    this.itensCarrinho = [];
    localStorage.clear();   
  }

}
