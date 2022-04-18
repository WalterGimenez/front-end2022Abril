import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './component/menu-nav/menu-nav.component';
import { ApLogoComponent } from './component/ap-logo/ap-logo.component';
import { RedesComponent } from './component/redes/redes.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { LogoutComponent } from './component/logout/logout.component';
import { BannerComponent } from './component/banner/banner.component';
import { AboutComponent } from './component/about/about.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    ApLogoComponent,
    RedesComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
