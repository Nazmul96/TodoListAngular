import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({ 
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit{

  updateTodo:FormGroup;
  constructor(private backend:BackendService,private router:ActivatedRoute,private routers:Router){
    this.updateTodo=new FormGroup(
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

  }
 
  addMessage:boolean=false;
  public categoryData=[];
  public subCategoryData=[];
  public clientData=[];
  public error=[];

  ngOnInit(): void{      
    this.backend.getcategory().subscribe((allData)=>{
      this.getcategoryList(allData);

    });
    this.backend.getclient().subscribe((allData)=>{
       this.getclientList(allData);

    });
   
    var id=this.router.snapshot.params['id']

    
    
    this.backend.geteditTodo(id).subscribe((result:any)=>{
        console.log(result.data);
          this.updateTodo.patchValue({
            title:result.data.title,
            category_id:result.data.category_id,
            subcat_id:result.data.subcat_id,
            description:result.data.description,
            start_time:result.data.start_time,
            recurring:result.data.recurring,
            who_it_for:result.data.who_it_for,
            second_signature:(result.data.second_signature == 1)?true:false,
            quick_log:(result.data.quick_log == 1)?true:false
         });
        if(result.data.subcat_id != null) 
        {
          this.backend.getSubCategory(result.data.category_id).subscribe((allData)=>{
            this.showSubctegory(allData);
          });

        }

    });
  }

  getcategoryList(allData:any)
  {

     this.categoryData=allData.data;   
  }

  getclientList(allData:any){
     //console.log(allData);
     this.clientData=allData.data;   
  }

  getSubcategory(id:any){
    this.backend.getSubCategory(id).subscribe((allData)=>{
         this.showSubctegory(allData);
    });
  }

  showSubctegory(allData:any){
    this.subCategoryData=allData.data;
  }

  updateTodoData(){
      this.backend.updateTodo(this.router.snapshot.params['id'],this.updateTodo.value).subscribe((result)=>{
            this.handleResponse(result);
      });
  }

  handleResponse(allData:any){
    
    if(allData.error)
      {
        this.error=allData.message;
        //console.log(this.error);
      }
      else
      {
        this.addMessage=true;
        this.routers.navigateByUrl('todo');
      }

  }
  messageRemove(){
    this.addMessage=false; 
  }
}
