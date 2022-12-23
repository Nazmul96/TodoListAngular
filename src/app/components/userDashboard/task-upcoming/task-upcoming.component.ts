import { Component } from '@angular/core';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-task-upcoming',
  templateUrl: './task-upcoming.component.html',
  styleUrls: ['./task-upcoming.component.scss']
})
export class TaskUpcomingComponent {

  constructor(private backend:BackendService){
   
  }

  title = 'datatables';
	message:boolean=false;
  dulicateMessage:boolean=false;
	dtOptions: DataTables.Settings = {};
  public taskData:any=[];
  public busttonShow: boolean = false;

  ngOnInit(): void{ 
    this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 5,
		  };   
      
    this.backend.getTaskUpcoming().subscribe((allData)=>{
        this.getTaskList(allData);
    });
  }

  getTaskList(allData:any)
	{
	     this.taskData=allData.data; 
       //console.log(this.taskData);  
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

  toggleButton() {
    this.busttonShow = true;
  }
  
}
