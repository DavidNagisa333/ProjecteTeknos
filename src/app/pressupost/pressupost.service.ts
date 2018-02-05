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
    return this._http.get("C:/xampp/cgi-bin/api/select.php/")
      .map(res=>{
        this.checkMe = res;
      
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }

  private headers = new Headers({
        'Content-Type': 'application/json',        
    });

    private headers_post = new Headers({
        'Content-Type': 'x-www-form-urlencoded',
    });

}
