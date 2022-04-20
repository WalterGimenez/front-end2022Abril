import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutEditComponent } from './component/about-edit/about-edit.component';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { MenuNavComponent } from './component/menu-nav/menu-nav.component';

const routes: Routes = [
  {path: "", component: MenuNavComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "about-edit", component: AboutEditComponent, pathMatch: "full"},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
