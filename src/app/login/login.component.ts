import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  senha = "";

  constructor( 
    private auth: AuthService,
    private router: Router ){}

  entrar(){
    if(this.auth.login(this.email, this.senha)){
      this.router.navigate(['carrinho']);
      return;     
    }
    alert("E-mail ou senha inválido!");
    this.email = "";
    this.senha = "";
  }
}


