import { Component, OnInit} from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',            
  templateUrl: './app.component.html',  
  providers: [ LoginService ]
})


export class AppComponent implements OnInit{

    
    title = 'Escola Otaku';

   
    logged=false;

    constructor(private loginService : LoginService,
               private router:Router){}


    logout(){ 
         window.location.reload();
         this.loginService.logout();  
         this.router.navigate(['']); 
    }

    ngOnInit(){
        if (this.loginService.getToken()=="")
            {
                this.logged=false;
                this.router.navigate(['']); 
            }
        else{
            var a = this.loginService.getToken();
            console.log(a);
            //var a = this.currentUserData();
            this.logged=true;  
            this.router.navigate(['']);
        }
    }
}