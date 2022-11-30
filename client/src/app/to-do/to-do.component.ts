import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  tasks: Task[] = [];
  selectedTask: Task | undefined;

  constructor(private service: TaskService) { }

  async ngOnInit() {
    this.service.getTasks().subscribe((tasks:Task[])=>{
      this.tasks = tasks
    });
  }

  selectHero(hero: Task) { this.selectedTask = hero; }
}
