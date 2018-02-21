import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PressupostService } from '../pressupost.service';
import { LoginService } from '../../login/login.service';
import { Pressupost } from '../pressupost';

@Component({
  selector: 'app-pressupost-detall',
  templateUrl: './pressupost-detall.component.html'
})
export class PressupostDetallComponent implements OnInit {

 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pressupostService: PressupostService,
    private loginService: LoginService
  ) { }

  id=1;
  persona;

  ngOnInit() {
    this.getSinglePressupost();
    this.persona=this.loginService.getPersona(this.id);
  }

  pressupost:Pressupost;

  getSinglePressupost(){
    var id = this.route.snapshot.params['id'];
    this.pressupostService
      .getPressupost(id)
      .subscribe(pressupost =>{
          this.pressupost = pressupost[0];
          })
  };

  goBack(){
    this.router.navigate(['/pressupost']);
  }
}

