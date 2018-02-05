import { Component, OnInit } from '@angular/core';
import { TiquetService } from '../tiquet.service';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-tiquet',
  templateUrl: './crear-tiquet.component.html',
  styleUrls: ['./crear-tiquet.component.css'],
  providers: [ TiquetService]
})
export class CrearTiquetComponent implements OnInit {
	addNom;values;error;finished
  constructor(private crearService:TiquetService,
    private route: ActivatedRoute,
    private router: Router) {}
   
    ngOnInit() {
    }
    newTiquetSend(){
    	this.crearService.addTiquet(this.addNom)
                 .subscribe(
            value => this.values=value,
            error => {},
            () => this.finished = true         
        );
          
       } 
    buscarTiquet(){
       this.router.navigate(['/buscarTiquet'], { queryParams: { nom: this.addNom } });
    }
  }
