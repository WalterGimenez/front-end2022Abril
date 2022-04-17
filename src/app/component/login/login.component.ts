import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  errorMessage = "Credenciales inválidas";
  invalidLogin = false;

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  hadleLogin(){
    if(this.authentication.authenticate(this.username, this.password)){
      this.router.navigate(['/']);
    }else{
      this.invalidLogin = true;
    }
  }
}
