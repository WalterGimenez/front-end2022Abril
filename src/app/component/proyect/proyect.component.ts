import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  proyectList: any;
  datoPortfolio: any;

  constructor(private datosPortfolio: PortfolioService, public authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      
      this.proyectList = data.proyectos;
      this.datoPortfolio = data;
    });
  }
  
  isUserLogged(){
    
    this.authentication.isUserLogged();
  }
}

