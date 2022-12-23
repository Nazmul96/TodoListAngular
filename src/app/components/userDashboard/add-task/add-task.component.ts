import { Component,OnInit} from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import { FormGroup,FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';

@Component({ 
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

  constructor(private backend:BackendService,private router:ActivatedRoute,private routers:Router){
    
  }

  addTask=new FormGroup(
    {
      task_title:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      due_date:new FormControl('',Validators.required),
      time_set:new FormControl('',Validators.required),
      repeat:new FormControl(''),
    }
  );

  ngOnInit(): void{   
    this.backend.getcategoryList().subscribe((allData)=>{
      this.getcategoryList(allData);

    });
  }

  public categoryData=[];
  public error=[];

  getcategoryList(allData:any)
  {
     this.categoryData=allData.data;   
  }

  saveTask(){
    this.backend.saveTaskData(this.addTask.value).subscribe((allData)=>{
        this.handleResponse(allData)
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
        this.routers.navigateByUrl('task-index');
      }

  }
}

