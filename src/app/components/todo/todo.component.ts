import { Component,OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit{

	constructor(private backend:BackendService){
    
    }
	title = 'datatables';
	message:boolean=false;
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject<any>();

    public todoData:any=[];
    ngOnInit(): void{ 

		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 5,
		  }; 

    	this.backend.getTodoData().subscribe((allData)=>{
          this.getTodoList(allData);
		  //this.dtTrigger.next();
    	});	
    	 
	    
    }  

    getTodoList(allData:any)
	{
	     //console.log(allData.data);
	     this.todoData=allData.data;   
	 }

	ngOnDestroy(): void {
	// Do not forget to unsubscribe the event
	 this.dtTrigger.unsubscribe();
	}
	messageRemove(){
		this.message=false; 
	}

	deleteTodo(todo_id:any){
		this.backend.deleteTodoData(todo_id).subscribe((result)=>{
			 this.message=true;
			 this.ngOnInit();
		});
	  }
}
