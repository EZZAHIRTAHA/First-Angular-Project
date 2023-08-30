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
      this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }


  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(tsk => tsk.id !== task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
    
  }


  onAddTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));   
  }

}
