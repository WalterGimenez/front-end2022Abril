import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PortfolioService } from 'src/app/service/portfolio.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  datoPortfolio: any;
  photoUnaj: any;
  mymodal!: any;
  closeResult: string = '';

  constructor(private datosPortfolio: PortfolioService, public authentication: AuthenticationService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datoPortfolio = data;
      this.photoUnaj = data.company;
    });
  }

  isUserLogged(){
    
    this.authentication.isUserLogged();
  }
  
}
