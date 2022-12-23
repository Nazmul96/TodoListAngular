import { Component } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  constructor(private backend:BackendService,private router:Router){
    
  }

  addTodo=new FormGroup(
    {
      title:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      subcat_id:new FormControl(''),
      description:new FormControl('',Validators.required),
      start_time:new FormControl('',Validators.required),
      recurring:new FormControl(''),
      who_it_for:new FormControl(''),
      second_signature:new FormControl(''),
      quick_log:new FormControl('')
    }
  );

  ngOnInit(): void{      
    this.backend.getcategory().subscribe((allData)=>{
      this.getcategoryList(allData);

    });
    this.backend.getclient().subscribe((allData)=>{
       this.getclientList(allData);

    });
  }
  
  public categoryData=[];
  public subCategoryData=[];
  public clientData=[];
  public error=[];
  getcategoryList(allData:any)
  {
     //console.log(allData);
     this.categoryData=allData.data;   
  }

  getclientList(allData:any){
     //console.log(allData);
     this.clientData=allData.data;   
  }

  saveTodo(){
    //console.log(this.addTodo.value);
    this.backend.saveTodoData(this.addTodo.value).subscribe((allData)=>{
        this.handleResponse(allData)
    });
  }
  getSubcategory(id:any){
    this.backend.getSubCategory(id).subscribe((allData)=>{
         this.showSubctegory(allData);
    });
  }

  showSubctegory(allData:any){
      this.subCategoryData=allData.data;
  }
  
  get validationMessage(){
    return this.addTodo.controls;
  }

  handleResponse(allData:any){
    
    if(allData.error)
      {
        this.error=allData.message;
        //console.log(this.error);
      }
      else
      {
        this.router.navigateByUrl('todo');
      }

  }
}
