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

  pressupostos:any;
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