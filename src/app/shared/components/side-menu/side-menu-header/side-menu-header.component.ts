import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'shared-side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-header.component.html',
  styleUrl: './side-menu-header.component.css'
})
export class SideMenuHeaderComponent {


  isCollapsed = input.required<boolean>();


  photoSize = computed(() => this.isCollapsed() ? '32' : '100')

}
