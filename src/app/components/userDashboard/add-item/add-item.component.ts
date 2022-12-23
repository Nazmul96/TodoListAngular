import { Component } from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import { FormGroup,FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent { 

  constructor(private backend:BackendService,private router:Router){
    
  }
  public error=[];
  message:boolean=false;
  addItem=new FormGroup(
    {
      category_name:new FormControl('',Validators.required),
    }
  );
  
  saveItem(){
    this.backend.saveItemData(this.addItem.value).subscribe((allData)=>{
        console.log(allData);
        this.handleResponse(allData)
    });
  }

  handleResponse(allData:any){
    if(allData.error)
      {
        this.error=allData.message;
      }
      else
      {
        this.message=true;
        this.router.navigateByUrl('item-list');
      }

  }

  messageRemove(){
		this.message=false; 
	}

}
