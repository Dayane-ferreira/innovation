import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { Produto, ProdutoCarrinho, produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto | undefined;
  quantidade = 1;
  produtos: Produto[] | undefined;
  

  constructor( 
    private produtosService: ProdutosService,
    private route: ActivatedRoute,    
    private carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService){}

    ngOnInit(): void {
    
      const produtoId = Number(this.route.snapshot.paramMap.get('id'));
      this.produto = this.produtosService.getOne(produtoId);
    } 

    adicionarProduto(){
      this.notificacaoService.notificar("O produto foi adicionado ao carrinho!");
      const produto : ProdutoCarrinho = {
        ...this.produto!,
        quantidade : this.quantidade
      }
      this.carrinhoService.adicionarProduto(produto);
    }

     
}
