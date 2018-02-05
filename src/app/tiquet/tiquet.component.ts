import { Component, OnInit } from '@angular/core';
import { TiquetService } from './tiquet.service';
@Component({
  selector: 'app-tiquet',
  templateUrl: './tiquet.component.html',
  styleUrls: ['./tiquet.component.css'],
  providers: [TiquetService]
})
export class TiquetComponent implements OnInit {

  constructor(private listTiquetService: TiquetService) { }

  ngOnInit() {
  }
  tiquets;
  listTiquets(){
     this.listTiquetService.listTiquets()
                .subscribe(
                data => (this.tiquets = data
                  )
      );    
    }
}
