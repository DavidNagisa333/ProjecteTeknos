import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PressupostService {
  
  constructor(private _http:Http) { }
 

  getPressupostos(){
    console.log('service');
    return this._http.get("http://172.17.10.64/api/select.php")
      .map(res => res.json());
      };

  deletePressupost(id){
    return this._http.post("http://172.17.10.64/api/delete.php/",{'id':id})
      .map(()=>this.getPressupostos());
  }

}
