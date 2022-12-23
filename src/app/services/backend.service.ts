import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BackendService {

   constructor(private http:HttpClient) {
    
      
   }

  login(data:any){
    //console.log(data);
    return this.http.post('https://pk.therssoftware.com/logmycare/public/api/v1/login',data);
  }

  logout(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/logout',requestOptions);  
  }

   getTodoData(){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      const requestOptions = { headers: headers };
     return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/todos',requestOptions);
  }

  getcategory(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
     return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/category',requestOptions);
  }

  getclient(){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      const requestOptions = { headers: headers };
      return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/clients',requestOptions);
  }

  saveTodoData(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

    return this.http.post('https://pk.therssoftware.com/logmycare/public/api/v1/todos',data,requestOptions);
  }

  getSubCategory(id:any){
    //console.log(id);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    //console.log('http://logmycare.test/api/v1/subCategory/'+id);
    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/subCategory/'+id,requestOptions);
  }
  
  deleteTodoData(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
   
    return this.http.delete('https://pk.therssoftware.com/logmycare/public/api/v1/todos/'+id,requestOptions);
  }

  
  geteditTodo(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

     return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/todos/'+id,requestOptions);
  }

  
  updateTodo(id:any,data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

     return this.http.put('https://pk.therssoftware.com/logmycare/public/api/v1/todos/'+id,data,requestOptions);
  }
    
//Project Code--------------
  getTaskData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/tasks',requestOptions);
  }

  deleteTaskData(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
   
    return this.http.delete('https://pk.therssoftware.com/logmycare/public/api/v1/tasks/'+id,requestOptions);
  }

  saveTaskData(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

    return this.http.post('https://pk.therssoftware.com/logmycare/public/api/v1/tasks',data,requestOptions);
  }

  geteditTask(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

     return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/tasks/'+id,requestOptions);
  }
  updateTask(id:any,data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

     return this.http.put('https://pk.therssoftware.com/logmycare/public/api/v1/tasks/'+id,data,requestOptions);
  }

  duplicateTask(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };

    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/task/duplicate/'+id,requestOptions);
  }

  getTodayTaskData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/task/today',requestOptions);
  }

  getTaskUpcoming(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/task/upcoming',requestOptions); 
  }

  getItemData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/categorylists',requestOptions);
  }

  saveItemData(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    return this.http.post('https://pk.therssoftware.com/logmycare/public/api/v1/categorylists',data,requestOptions);
  }

  getcategoryList(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
     return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/categorylist',requestOptions);
  }

  dashboardData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
     return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/dashboardData',requestOptions);
  }

  completeTask(taskId:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const requestOptions = { headers: headers };
    var slug=taskId.toString();

    return this.http.get('https://pk.therssoftware.com/logmycare/public/api/v1/completeTask/'+slug,requestOptions);
  }

  
}
