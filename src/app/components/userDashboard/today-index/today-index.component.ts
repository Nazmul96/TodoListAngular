import { Component,OnInit} from '@angular/core';
import {BackendService} from '../../../services/backend.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-today-index',
  templateUrl: './today-index.component.html',
  styleUrls: ['./today-index.component.scss']
})
export class TodayIndexComponent implements OnInit{

  title = 'datatables';
  message:boolean=false;
  dulicateMessage:boolean=false;
  public taskData:any=[];
  dtOptions: DataTables.Settings = {};
  public busttonShow: boolean = false;

  constructor(private backend:BackendService){
   
  }

  ngOnInit(): void{ 
    this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 5,
		  };
    this.backend.getTodayTaskData().subscribe((allData)=>{
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
