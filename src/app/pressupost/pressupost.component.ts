import { Component, OnInit } from '@angular/core';
import { PressupostService } from './pressupost.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

pressupostos= [];
  persona;

  ngOnInit() {
    //this.getPressupostos();
    this.loginService.getPersona().subscribe(result => {this.getPressupostosPersona(result);});
  }
//transformar en array
  getPressupostosPersona(id){
      this._pressupostService
        .getPressupostosPersona(id)
        .subscribe(pressupostos => {
        this.pressupostos = pressupostos;
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