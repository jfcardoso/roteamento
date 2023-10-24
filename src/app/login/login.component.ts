import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ""
  password: string = ""

  constructor(
    private auth : AuthService,
    private route : Router
  ){}

  login(){
    if (this.auth.login(this.email, this.password)){
      this.route.navigate(["protected-page"]);
      return
    }
    alert("E-mail ou senha incorreta! Favor verifique e tente novamente.");
    this.email = "";
    this.password = "";
  }
}
