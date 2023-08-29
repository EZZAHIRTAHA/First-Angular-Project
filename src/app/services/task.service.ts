import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../tasks';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';




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
}
