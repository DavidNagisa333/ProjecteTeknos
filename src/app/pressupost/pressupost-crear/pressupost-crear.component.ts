import { Component, OnInit } from '@angular/core';
import { PressupostService } from '../pressupost.service';
import { Pressupost } from '../pressupost';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-pressupost-crear',
  templateUrl: './pressupost-crear.component.html',
  styleUrls: ['./pressupost-crear.component.css']
})
export class PressupostCrearComponent implements OnInit {

  constructor(
    private pressupostService: PressupostService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Pressupost();
  addPressupost(){
      this.pressupostService
        .addPressupost(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/pressupost']);
  }

}
