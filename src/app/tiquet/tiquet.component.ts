import { Component, OnInit } from '@angular/core';
import { TiquetService} from './tiquet.service';
import { Tiquet } from './tiquet';
@Component({
  selector: 'app-tiquet',
  templateUrl: './tiquet.component.html',
  providers: [ TiquetService]
})
export class TiquetComponent implements OnInit {

  constructor(private listTiquetService: TiquetService) { }
  tiquets = [
{
"id": 1,
"nom": "aaa"
},
{
	"id": 2,
"nom": "bbbb"
},
{
"id": 3,
"nom": "ccc"
},
{
"id": 4,
"nom": "ddd"
},
{
"id": 5,
"nom": "eee"
},
{
"id": 6,
"nom": "aaa"
},
{
"id": 7,
"nom": "ggg"
}];

  ngOnInit() {
  	//this.listTiquets();
  }

  listTiquets(){
     this.listTiquetService.listTiquets()
                .subscribe(
                data => (this.tiquets = data
                  )
      );
               
	}
}

