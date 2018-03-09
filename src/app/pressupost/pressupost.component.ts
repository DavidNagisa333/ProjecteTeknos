import { Component, OnInit } from '@angular/core';
import { PressupostService } from './pressupost.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-pressupost',
  templateUrl: './pressupost.component.html',
})
export class PressupostComponent implements OnInit {

    constructor(
    private _pressupostService:PressupostService,
    private router: Router,
    private loginService: LoginService
   ) { }
/*
  pressupostos = [
  {
    "nomPersona" : "1",
    "cognomPersona" : "1",
    "situacioLaboral" : "1",
    "ingressos" : "1",
    "demanda" : "1"
  },
  {
    "nomPersona" : "1",
    "cognomPersona" : "1",
    "situacioLaboral" : "1",
    "ingressos" : "1",
    "demanda" : "1"
  }

  ];
*/
pressupostos= [];
  id=1;
  persona;

  ngOnInit() {
    //this.getPressupostos();
    this.persona=this.loginService.getPersona(this.id);
    this.getPressupostosPersona(this.persona.id_persona);
  }
//transformar en array
  getPressupostosPersona(id){
      this._pressupostService
        .getPressupostosPersona(id)
        .subscribe(pressupostos => {
        this.pressupostos = pressupostos;
        console.log(this.pressupostos);
          })
  }


  getPressupostos(){
     this._pressupostService
        .getPressupostos()
        .subscribe(pressupostos => {
        this.pressupostos = pressupostos;      
      })
  }

  deletePressupost(id){
      this._pressupostService
        .deletePressupost(id)
        .subscribe(() => {
        this.getPressupostos();
      } )
  }



}