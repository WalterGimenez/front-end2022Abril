import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

 

  constructor(public authentication: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authentication.logout();
  }
}
