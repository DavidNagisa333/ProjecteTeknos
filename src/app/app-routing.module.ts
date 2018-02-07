import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PressupostComponent } from './pressupost/pressupost.component';
import { TiquetComponent } from './tiquet/tiquet.component';
import { PressupostDetallComponent } from './pressupost/pressupost-detall/pressupost-detall.component';
import { PressupostEditarComponent } from './pressupost/pressupost-editar/pressupost-editar.component';
import { PressupostCrearComponent } from './pressupost/pressupost-crear/pressupost-crear.component';
import { CrearTiquetComponent } from './tiquet/crear-tiquet/crear-tiquet.component'; 
import { BuscarTiquetComponent } from './tiquet/buscar-tiquet/buscar-tiquet.component';

const routes: Routes = [  
    {path: 'pressupost', component: PressupostComponent},
    {path: 'detallPressupost/:id', component:PressupostDetallComponent},
    {path: 'editarPressupost/:id', component:PressupostEditarComponent},
    {path:'addPressupost', component:PressupostCrearComponent},
    {path: 'tiquet', component: TiquetComponent},
    {path: '', component: LoginComponent},
    {path: 'crearTiquet', component: CrearTiquetComponent},
    {path: 'buscarTiquet/:nom', component: BuscarTiquetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
