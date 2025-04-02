import { Component, input, signal } from '@angular/core';
import { MenuItem } from '../../../interfaces/menu-item';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'shared-side-menu-options',
  standalone: true,
  imports: [MatListModule, MatIconModule, MenuItemComponent],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {



  isCollapsed = input.required<boolean>();

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home',
    },
    {
      icon: 'dashboard',
      label: 'Panel de control',
      route: 'dashboard'
    },
    {
      icon: 'analytics',
      label: 'Listado de tareas',
      route: 'view-tasks',
      subItems: [
        {
          icon: 'directions_run',
          label: 'Mis tareas',
          route: 'my-tasks'
        },
        {
          icon: 'expand_all',
          label: 'Todas las tareas',
          route: 'all-tasks'
        },
        {
          icon: 'engineering',
          label: 'Ingeniería',
          route: 'engineering-tasks'
        },
        {
          icon: 'code',
          label: 'IT',
          route: 'it-tasks'
        },
      ]
    },
    {
      icon: 'add',
      label: 'Añadir tarea',
      route: 'add-task'
    },
  ]);

}
