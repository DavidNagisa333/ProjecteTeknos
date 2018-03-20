import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PressupostComponent } from './pressupost/pressupost.component';
import { TiquetComponent } from './tiquet/tiquet.component';
import { LoginComponent } from './login/login.component';
import { PressupostService} from './pressupost/pressupost.service';
import { PressupostDetallComponent } from './pressupost/pressupost-detall/pressupost-detall.component';
import { PressupostEditarComponent } from './pressupost/pressupost-editar/pressupost-editar.component';
import { PressupostCrearComponent } from './pressupost/pressupost-crear/pressupost-crear.component';
//import { ModificarTiquetComponent } from './tiquet/modificar-tiquet/modificar-tiquet.component';
//import { EsborrarTiquetComponent } from './tiquet/esborrar-tiquet/esborrar-tiquet.component';
//import { ConsultarTiquetComponent } from './tiquet/consultar-tiquet/consultar-tiquet.component';
import { CrearTiquetComponent } from './tiquet/crear-tiquet/crear-tiquet.component';
//import { ModificarPressupostComponent } from './pressupost/modificar-pressupost/modificar-pressupost.component';
//import { EsborrarPressupostComponent } from './pressupost/esborrar-pressupost/esborrar-pressupost.component';
//import { ConsultarPressupostComponent } from './pressupost/consultar-pressupost/consultar-pressupost.component';
import { BuscarTiquetComponent } from './tiquet/buscar-tiquet/buscar-tiquet.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PressupostComponent,
    TiquetComponent,
    LoginComponent,
    PressupostDetallComponent,
    PressupostEditarComponent,
    PressupostCrearComponent,
    //ModificarTiquetComponent,
    //ConsultarTiquetComponent,
    CrearTiquetComponent,
    //CrearPressupostComponent,
    //ModificarPressupostComponent,
    //EsborrarPressupostComponent,
    //ConsultarPressupostComponent,
    BuscarTiquetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PressupostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
