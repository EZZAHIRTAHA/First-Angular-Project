import { Component, EventEmitter, Output,  } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})


export class AddTaskComponent {
  
  
  text: string= "";
  day: string= "";
  reminder: boolean = false;
  faCalendar = faCalendar;
  showAddTask: boolean = false;
  subscription: Subscription;
  
  constructor(private uiService: UiService ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
    // this.uiService = UiService
   }
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
