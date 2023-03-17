import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent {
  nome = "";

  constructor( private route: Router){}

  pesquisar(){
    if(this.nome){
      this.route.navigate(['produtos'], {queryParams:{nome: this.nome}});
      return;
    }

    this.route.navigate(['produtos']);
  }

}
