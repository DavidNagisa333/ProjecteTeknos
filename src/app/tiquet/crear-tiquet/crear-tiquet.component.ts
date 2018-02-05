import { Component, OnInit } from '@angular/core';
import { TiquetService } from '../tiquet.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-crear-tiquet',
  templateUrl: './crear-tiquet.component.html',
  styleUrls: ['./crear-tiquet.component.css'],
  providers: [ TiquetService]
})
export class CrearTiquetComponent implements OnInit {
	addNom;values;error;finished
  constructor(private crearService:TiquetService) { }

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
  listTiquet(){
    
  }
  }
