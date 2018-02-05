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


@NgModule({
  declarations: [
    AppComponent,
    PressupostComponent,
    TiquetComponent,
    LoginComponent
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
