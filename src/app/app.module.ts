import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './component/menu-nav/menu-nav.component';
import { ApLogoComponent } from './component/ap-logo/ap-logo.component';
import { RedesComponent } from './component/redes/redes.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    ApLogoComponent,
    RedesComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
