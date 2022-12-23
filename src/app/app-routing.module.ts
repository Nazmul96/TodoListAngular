import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TodoComponent} from './components/todo/todo.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {EditTodoComponent} from './components/edit-todo/edit-todo.component';
import {HomeComponent} from './components/home/home.component';
import { PasswordForgetComponent } from './components/password-forget/password-forget.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/userDashboard/dashboard/dashboard.component';
import { TaskIndexComponent } from './components/userDashboard/task-index/task-index.component';
import { TodayIndexComponent } from './components/userDashboard/today-index/today-index.component';
import { TaskUpcomingComponent } from './components/userDashboard/task-upcoming/task-upcoming.component';
import { ItemListComponent } from './components/userDashboard/item-list/item-list.component';
import { AddItemComponent } from './components/userDashboard/add-item/add-item.component';
import { AddTaskComponent } from './components/userDashboard/add-task/add-task.component';
import { EditTaskComponent } from './components/userDashboard/edit-task/edit-task.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
	 {
		path: '', 
		component: HomeComponent
	 },
	 {
		path:'login',
		component:LoginComponent,
		//canActivate:BeforeLoginService
	  },
	  {
	    path:'todo',
	    component:TodoComponent
	  },
	  {
		path:'edit/:id',
		component:EditTodoComponent
	  },
	  {
		path:'addtodo',
		component:AddTodoComponent
	  },
	  {
		path:'forget-password',
		component:PasswordForgetComponent
	  },
	  {
		path:'sign-up',
		component:SignUpComponent
	  },
	  {
		path:'dashboard',
		component:DashboardComponent
	  },
	  {
		path:'task-index',
		component:TaskIndexComponent
	  },
	  {
		path:'today-task',
		component:TodayIndexComponent
	  },
	  {
		path:'upcoming-task',
		component:TaskUpcomingComponent
	  },
	  {
		path:'item-list',
		component:ItemListComponent
	  },
	  {
		path:'add-item',
		component:AddItemComponent
	  },
	  {
		path:'add-task',
		component:AddTaskComponent
	  },
	  {
		path:'edit-task/:id',
		component:EditTaskComponent
	  }
	  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
