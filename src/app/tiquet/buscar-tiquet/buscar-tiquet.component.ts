import { Component, OnInit } from '@angular/core';
import { TiquetService } from '../tiquet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-tiquet',
  templateUrl: './buscar-tiquet.component.html',
  styleUrls: ['./buscar-tiquet.component.css'],
  providers: [TiquetService]
})
export class BuscarTiquetComponent implements OnInit {

  constructor(private buscarTiquetService:TiquetService,
  	private route: ActivatedRoute) { }
  nom;tiquets;
  ngOnInit() {
  	this.nom = this.route.snapshot.params.nom;
  	this.tiquets = this.buscarTiquet();
  }

  buscarTiquet(){
  	console.log(this.nom);
  	this.buscarTiquetService.buscarTiquets(this.nom)
                .subscribe(
                data => (this.tiquets = data
                  )
      );    
  }
}
