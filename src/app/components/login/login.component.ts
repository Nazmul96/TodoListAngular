import { Component } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {TokenService} from '../../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form={
    email:null,
    password:null
  }

  constructor(private backend:BackendService,private token:TokenService,private router:Router){}
  ngOnInit(): void{
    
  }
  public error=null;
  submitLogin(){
      //console.log(this.form);
      return this.backend.login(this.form).subscribe(
           data=>this.handleResponse(data),
          
      );
  }

  handleResponse(data:any)
  {
     if(data.access_token)
      {
        this.token.handle(data.access_token);
        this.router.navigateByUrl('dashboard');
      }
      else
      {
        this.handleError(data);
      }
    }
    handleError(error:any){
    
      this.error=error.message;
      console.log(error);
  }

}
