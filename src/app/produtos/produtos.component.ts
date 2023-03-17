import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtos: Produto[] | undefined;

  constructor ( 
    private produtoService: ProdutosService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe( params => {
      const nome = params.get("nome")?.toLowerCase();

      if(nome){
        this.produtos = produtos.filter(produto => produto.nome.toLowerCase().includes(nome));
        return;
      }

      this.produtos = produtos;
    })

  } 

}