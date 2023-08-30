import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../tasks';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  })
}



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    // return TASKS;// const tasks = of(TASKS);// return tasks;
    return this.http.get<Task[]>(this.apiURL)
  }


  deleteTask(task: Task): Observable<Task> {
    const url: string = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url)
  }


  updateTaskReminder(task: Task): Observable<Task> {
    const url: any = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable <Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions)
  }
}
