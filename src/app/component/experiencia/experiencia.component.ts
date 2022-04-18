import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PortfolioService } from 'src/app/service/portfolio.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  jobList: any;
  datoPortfolio: any;
  

  constructor(private datosPortfolio: PortfolioService,public authentication: AuthenticationService  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.jobList = data.company;
      this.datoPortfolio = data;
    });
  }
  
  isUserLogged(){
    
    this.authentication.isUserLogged();
  }
}
