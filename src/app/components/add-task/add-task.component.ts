import { Component, EventEmitter, Output } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})


export class AddTaskComponent {
  constructor() {  }
  text: string= "";
  day: string= "";
  reminder: boolean = false;
  faCalendar = faCalendar;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  clearForm() {
    this.text = "";
    this.reminder = false;
    this.day = "";
  }

  onSubmit() {
    if (!this.text) {
      alert("Please Provide A Text!");
      return;
    }
    const { text, day, reminder } = this;
    const newTask = {
      text: text,
      day: day,
      reminder: reminder
    };
    this.onAddTask.emit(newTask);
    this.clearForm();

  }
  

}
