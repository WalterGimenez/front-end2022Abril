import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {
  skillList: any;
  datoPortfolio: any;
  

  constructor(private datosPortfolio: PortfolioService, public authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.skillList = data.skills;
      this.datoPortfolio = data;
    });
  }
}
