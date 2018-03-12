import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PressupostService {
   // Stringify payload
  headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options       = new RequestOptions({ headers: this.headers }); // Create a request option

  constructor(private _http:Http) { }

   

  getPressupostos(){
    return this._http.get("http://172.17.10.64/api/select.php")
      .map(res => res.json());
  };
  deletePressupost(id){
    return this._http.post("http://172.17.10.64/api/delete.php/",{'id':id})
      .map(()=>this.getPressupostos());
  }
 getPressupost(id){
    return this._http.post("http://172.17.10.64/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  updatePressupost(info){
    return this._http.post("http://172.17.10.64/api/update.php/", info)
      .map(()=>"");
  }
   addPressupost(info){
    return this._http.post("http://172.17.10.64/api/insert.php",info)
      .map(()=>"");
  }
  getPressupostosPersona(id){
      return this._http.post("http://172.17.10.64/api/selectonepersona.php",{'id':id})
      .map(res=>res.json());
  };

}
