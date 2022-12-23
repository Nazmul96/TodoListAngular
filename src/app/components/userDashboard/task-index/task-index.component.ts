import { Component,OnInit} from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.scss']
})
export class TaskIndexComponent implements OnInit{

  constructor(private backend:BackendService){
   
  }
 
  taskRemainder=new FormGroup(
    {
      due_date:new FormControl('',Validators.required),
      time_set:new FormControl('',Validators.required),
    }
  );

  title = 'datatables';
	message:boolean=false;
  dulicateMessage:boolean=false;
  completeMessage:boolean=false;
	dtOptions: DataTables.Settings = {};
  public taskData:any=[];
  public busttonShow:number=0;
  public taskId:any=[];

  ngOnInit(): void{ 
    this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 5,
		  }; 
      
    this.backend.getTaskData().subscribe((allData)=>{
        this.getTaskList(allData);

    });
  }

  getTaskList(allData:any)
	{
	     this.taskData=allData.data; 
       //console.log(this.taskData[0].task_title);  
	}

  messageRemove(){
		this.message=false;
    this.dulicateMessage=false; 
	}

	deleteTask(todo_id:any)
  {
		this.backend.deleteTaskData(todo_id).subscribe((result)=>{
			 this.message=true;
			 this.ngOnInit();
		});
	}

  duplicateTask(todo_id:any)
  {
    //console.log(todo_id);
		this.backend.duplicateTask(todo_id).subscribe((result)=>{
			 this.dulicateMessage=true;
			 this.ngOnInit();
		});
	}

  toggleButton(event:any,id:any) {
    //console.log(id);
    if(event.target.checked == true){
       this.busttonShow++;
       this.taskId.push(id);
    }
    else
    {
      this.busttonShow--;
      var index = this.taskId.indexOf(id);
      if (index > -1) {
        this.taskId.splice(index,1);
      }

    }
   
  }

 
  taskRemaind(){
    // alert('jii');
    // console.log(this.taskRemainder.value);
  }

  completeTask(){
    this.backend.completeTask(this.taskId).subscribe((result)=>{
      // this.completeMessage=true;
      // this.ngOnInit();
   });
  }
}
