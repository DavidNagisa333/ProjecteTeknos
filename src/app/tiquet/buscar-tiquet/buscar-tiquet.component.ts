import { Component, OnInit } from '@angular/core';
import { TiquetService } from '../tiquet.service';

@Component({
  selector: 'app-buscar-tiquet',
  templateUrl: './buscar-tiquet.component.html',
  styleUrls: ['./buscar-tiquet.component.css'],
  providers: [TiquetService]
})
export class BuscarTiquetComponent implements OnInit {

  constructor(private buscarTiquetService:TiquetService) { }
  name;tiquets;
  ngOnInit() {
  	
  	this.tiquets = this.buscarTiquet();
  }

  buscarTiquet(){
  	this.buscarTiquetService.buscarTiquets(this.name)
                .subscribe(
                data => (this.tiquets = data
                  )
      );    
  }
}
