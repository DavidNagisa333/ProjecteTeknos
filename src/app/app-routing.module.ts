import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PressupostComponent } from './pressupost/pressupost.component';
import { TiquetComponent } from './tiquet/tiquet.component';
import { CrearTiquetComponent } from './tiquet/crear-tiquet/crear-tiquet.component'; 

const routes: Routes = [
  
    {path: 'pressupost', component: PressupostComponent},
    {path: 'tiquet', component: TiquetComponent},
    {path: 'login', component: LoginComponent},
    {path: 'test', component: CrearTiquetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
