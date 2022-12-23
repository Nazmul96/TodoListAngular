import { Component } from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  updateTask:FormGroup;
  constructor(private backend:BackendService,private router:ActivatedRoute,private routers:Router){
    this.updateTask=new FormGroup(
    {
      task_title:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      due_date:new FormControl('',Validators.required),
      time_set:new FormControl('',Validators.required),
      repeat:new FormControl(''),
    }
   );

  }

  addMessage:boolean=false;
  public categoryData=[];
  public error=[];

  ngOnInit(): void{      
    this.backend.getcategory().subscribe((allData)=>{
      this.getcategoryList(allData);

    });

    var id=this.router.snapshot.params['id']

    this.backend.geteditTask(id).subscribe((result:any)=>{
        console.log(result.data);
          this.updateTask.patchValue({
            task_title:result.data.task_title,
            category_id:result.data.category_id,
            due_date:result.data.due_date,
            time_set:result.data.time_set,
            repeat:result.data.repeat,
         });

    });

  }
  getcategoryList(allData:any)
  {

    this.categoryData=allData.data;   
  }

  updateTaskData(){
    //console.log(this.updateTask.value);
      this.backend.updateTask(this.router.snapshot.params['id'],this.updateTask.value).subscribe((result)=>{
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
        this.routers.navigateByUrl('task-index');
      }

  }
  messageRemove(){
    this.addMessage=false; 
  }
}
