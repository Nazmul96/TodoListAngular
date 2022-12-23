import { Component } from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {

  constructor(private backend:BackendService,private router:Router){
   
  }

  logout(){
      this.backend.logout().subscribe((result)=>{
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
     });
  }
}
