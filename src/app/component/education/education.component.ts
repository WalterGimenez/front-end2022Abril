import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: any;
  datoPortfolio: any;

  constructor(private datosPortfolio: PortfolioService, public authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educationList = data.school;
      this.datoPortfolio = data;
    });
  }

  isUserLogged(){
    
    this.authentication.isUserLogged();
  }
}
