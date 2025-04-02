import { Component, computed, signal } from '@angular/core';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'tasks-main-page',
  standalone: true,
  imports: [ToolbarComponent, SideMenuComponent, MatSidenavContainer, MatSidenav, MatSidenavContent, RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export default class MainPageComponent {



    isCollapsed = signal(false);

    isCollapsedSet(isCollapsed:boolean){
      this.isCollapsed.set(isCollapsed);
    }

    sideMenuWidth =computed(() => this.isCollapsed() ? '65px' : '250px');




}
