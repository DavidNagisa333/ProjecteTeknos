import { Component, OnInit } from '@angular/core';
import { PressupostService } from './pressupost.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-pressupost',
  templateUrl: './pressupost.component.html',
})
export class PressupostComponent implements OnInit {

    constructor(
    private _empService:PressupostService,
    private router: Router
   ) { }
  employees:any;
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    console.log('component');
     this._empService
        .getEmployees()
        .subscribe(employees => {
        console.log(employees)
        this.employees = employees;
          
      })
  }
}
