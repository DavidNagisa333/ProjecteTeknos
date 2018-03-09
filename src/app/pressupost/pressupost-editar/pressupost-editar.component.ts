import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PressupostService } from '../pressupost.service';
import { Pressupost } from '../pressupost';

@Component({
  selector: 'app-pressupost-editar',
  templateUrl: './pressupost-editar.component.html'
})
export class PressupostEditarComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pressupostService: PressupostService
  ) { }

  ngOnInit() {
      this.getSinglePressupost();
  }

  model = new Pressupost();
  id = this.route.snapshot.params['id'];


  getSinglePressupost(){    
    this.pressupostService
      .getPressupost(this.id)
      .subscribe(pressupost =>{
          this.model = pressupost[0];
          })
  };

  updatePressupost(){
      this.pressupostService
        .updatePressupost(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/pressupost']);
  }
}
