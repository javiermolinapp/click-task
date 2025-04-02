import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'task-view-tasks-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './view-tasks-page.component.html',
  styleUrl: './view-tasks-page.component.css'
})
export default class ViewTasksPageComponent {

}
