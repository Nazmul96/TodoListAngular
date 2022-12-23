import { Component } from '@angular/core';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private backend:BackendService){
   
  }

  public taskData:any=[];
  public dashboard:any=[];

  ngOnInit(): void{ 
    this.backend.dashboardData().subscribe((allData)=>{
        this.getTaskList(allData);
    });
  }

  getTaskList(allData:any)
	{
	     this.taskData=allData.data.task_list; 
       this.dashboard['complete_task']=allData.data.complete_task; 
       this.dashboard['pending_task']=allData.data.pending_task;
       this.dashboard['overdue_task']=allData.data.overdue_task;
       this.dashboard['total_task']=allData.data.total_task;
      // console.log(this.dashboard);  
	}
}
