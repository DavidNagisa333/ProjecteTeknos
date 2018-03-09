import { Component, OnInit } from '@angular/core';
import { PressupostService } from '../pressupost.service';
import { Pressupost } from '../pressupost';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-pressupost-crear',
  templateUrl: './pressupost-crear.component.html'
})
export class PressupostCrearComponent implements OnInit {

  constructor(
    private pressupostService: PressupostService,
    private router: Router, private loginService: LoginService) { }

  id=1;
  persona;

  ngOnInit() {
    this.persona=this.loginService.getPersona(this.id);
  }

model:Pressupost = new Pressupost();


  addPressupost(){
    this.model.setNom(this.persona.nomPersona);
    this.model.setCognom(this.persona.cognomPersona);
    this.model.setSituacioLaboral(this.persona.situacioLaboral);
    this.model.setIdPersona(this.persona.id_persona);
    console.log(this.model);
    
      this.pressupostService
        .addPressupost(this.model)
        .subscribe(()=> this.goBack());
        
  }
   goBack(){
    this.router.navigate(['/pressupost']);
  }

}
