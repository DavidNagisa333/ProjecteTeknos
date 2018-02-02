import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class TiquetService {
   private url = 'http://localhost:8080/demo/';


	constructor(private http: Http){}


	addTiquet(addnom){
		var addUrl = this.url + "add";
        var creds = "nom=" + addnom ;

        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    } 
    
    //////////

    listTiquets(){
    	var listUrl = this.url + "all";
    	var a = this.http.get(listUrl)
                .map(res => res.json())
      return a;
    }

}
