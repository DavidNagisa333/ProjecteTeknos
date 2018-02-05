import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PressupostService {
  
 employees=[];
  constructor(private _http:Http) { }
  checkMe:any;

  getEmployees(){
    console.log('service');
    return this._http.get("C:/xampp/cgi-bin/api/select.php")
      .map(res => res.json());
       
      };
}


