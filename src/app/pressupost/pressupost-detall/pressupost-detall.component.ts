import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PressupostService } from '../pressupost.service';
import { Pressupost } from '../pressupost';

@Component({
  selector: 'app-pressupost-detall',
  templateUrl: './pressupost-detall.component.html',
  styleUrls: ['./pressupost-detall.component.css']
})
export class PressupostDetallComponent implements OnInit {

 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pressupostService: PressupostService
  ) { }

  ngOnInit() {
    this.getSinglePressupost();
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

