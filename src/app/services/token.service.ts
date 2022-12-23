import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token:any){
      this.set(token);
      console.log(this.isValid());
  }
  set(token:any){
    return localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  isValid(){
      const token=this.get();
      if(token){
        return true;
      }
      return false;
  }

  remove(){
    return localStorage.removeItem('token');
  }

  loggedIn(){
    return this.isValid()
  }
}
