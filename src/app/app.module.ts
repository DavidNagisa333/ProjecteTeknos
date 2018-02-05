import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PressupostComponent } from './pressupost/pressupost.component';
import { TiquetComponent } from './tiquet/tiquet.component';
import { LoginComponent } from './login/login.component';
import { ModificarTiquetComponent } from './tiquet/modificar-tiquet/modificar-tiquet.component';
import { EsborrarTiquetComponent } from './tiquet/esborrar-tiquet/esborrar-tiquet.component';
import { ConsultarTiquetComponent } from './tiquet/consultar-tiquet/consultar-tiquet.component';
import { CrearTiquetComponent } from './tiquet/crear-tiquet/crear-tiquet.component';
import { CrearPressupostComponent } from './pressupost/crear-pressupost/crear-pressupost.component';
import { ModificarPressupostComponent } from './pressupost/modificar-pressupost/modificar-pressupost.component';
import { EsborrarPressupostComponent } from './pressupost/esborrar-pressupost/esborrar-pressupost.component';
import { ConsultarPressupostComponent } from './pressupost/consultar-pressupost/consultar-pressupost.component';
import { BuscarTiquetComponent } from './tiquet/buscar-tiquet/buscar-tiquet.component';


@NgModule({
  declarations: [
    AppComponent,
    PressupostComponent,
    TiquetComponent,
    LoginComponent,
    ModificarTiquetComponent,
    EsborrarTiquetComponent,
    ConsultarTiquetComponent,
    CrearTiquetComponent,
    CrearPressupostComponent,
    ModificarPressupostComponent,
    EsborrarPressupostComponent,
    ConsultarPressupostComponent,
    BuscarTiquetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
