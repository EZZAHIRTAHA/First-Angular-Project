import { Component, Input } from '@angular/core';
// import { TASKS } from '../../tasks';
import {Task} from '../../Task'
import {TaskService} from '../../services/task.service'


// In order to use a service u have to add it as a provider into the constructor
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
