import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CarrinhoService } from '../carrinho.service';
import { ProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: ProdutoCarrinho [] = [];
  total = 0;
  
  constructor( 
    private carrinhoService: CarrinhoService,
    private auth: AuthService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.getAll();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.quantidade * curr.preco), 0);
  }

  removerProduto(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter( produto => produto.id !== produtoId);
    this.carrinhoService.removerProduto(produtoId);
    this.calcularTotal();
  }

  finalizarCompra(){
    if(this.auth.estarAutenticado()){
      alert("Sua compra foi realizada");
      this.carrinhoService.limparCarrinho();
      this.router.navigate(['']);
      return;
    }
    alert("Você precisa entrar na sua conta para finalizar a compra!");
    this.router.navigate(['login']);
  }

}