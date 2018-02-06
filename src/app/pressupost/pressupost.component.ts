import { Component, OnInit } from '@angular/core';
import { PressupostService } from './pressupost.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-pressupost',
  templateUrl: './pressupost.component.html',
})
export class PressupostComponent implements OnInit {

    constructor(
    private _pressupostService:PressupostService,
    private router: Router
   ) { }

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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
  {
    "nomPersona" : "1",
    "cognomPersona" : "1",
    "situacioLaboral" : "1",
    "ingressos" : "1",
    "demanda" : "1"
  }


  ];
  ngOnInit() {
    this.getPressupostos();
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