import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { GetMoreComponent } from './components/get-more/get-more.component';
import { AchieveComponent } from './components/achieve/achieve.component';
import { GetTouchComponent } from './components/get-touch/get-touch.component';
import { HomeComponent } from './components/home/home.component';
import { PasswordForgetComponent } from './components/password-forget/password-forget.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserHeaderComponent } from './components/userDashboard/user-header/user-header.component';
import { DashboardComponent } from './components/userDashboard/dashboard/dashboard.component';
import { SidevarComponent } from './components/userDashboard/sidevar/sidevar.component';
import { UserFooterComponent } from './components/userDashboard/user-footer/user-footer.component';
import { TaskIndexComponent } from './components/userDashboard/task-index/task-index.component';
import { TodayIndexComponent } from './components/userDashboard/today-index/today-index.component';
import { TaskUpcomingComponent } from './components/userDashboard/task-upcoming/task-upcoming.component';
import { ItemListComponent } from './components/userDashboard/item-list/item-list.component';
import { AddItemComponent } from './components/userDashboard/add-item/add-item.component';
import { AddTaskComponent } from './components/userDashboard/add-task/add-task.component';
import { EditTaskComponent } from './components/userDashboard/edit-task/edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    FooterComponent,
    BannerComponent,
    OurServiceComponent,
    GetMoreComponent,
    AchieveComponent,
    GetTouchComponent,
    HomeComponent,
    PasswordForgetComponent,
    SignUpComponent,
    UserHeaderComponent,
    DashboardComponent,
    SidevarComponent,
    UserFooterComponent,
    TaskIndexComponent,
    TodayIndexComponent,
    TaskUpcomingComponent,
    ItemListComponent,
    AddItemComponent,
    AddTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
