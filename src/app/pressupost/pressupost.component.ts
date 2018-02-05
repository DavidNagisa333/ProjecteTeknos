import { Component, OnInit } from '@angular/core';
import { PressupostService } from './pressupost.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-pressupost',
  templateUrl: './pressupost.component.html',
  styleUrls: ['./pressupost.component.css']
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
          this.employees = employees;
          console.log(employees);
      } )
  }
}
