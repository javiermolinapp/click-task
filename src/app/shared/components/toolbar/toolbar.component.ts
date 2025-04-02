import { Component, output, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'shared-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {


  isCollapsed = output<boolean>();

  collapsed = signal<boolean>(false);

  changeCollapsed(){
    this.collapsed.set(!this.collapsed());
    this.isCollapsed.emit(this.collapsed())
  }

}
