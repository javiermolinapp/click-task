import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',

    loadComponent: () => import('./tasks/pages/main-page/main-page.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./tasks/pages/home-page/home-page.component'),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./tasks/pages/dashboard-page/dashboard-page.component')

      },
      {
        path: 'view-tasks',
        loadComponent: () => import('./tasks/pages/view-tasks-page/view-tasks-page.component'),
        children: [
          {
            path: 'my-tasks',
            loadComponent: () => import('./tasks/pages/view-tasks-page/my-tasks/my-tasks.component'),
          },
          {
            path: 'all-tasks',
            loadComponent: () => import('./tasks/pages/view-tasks-page/all-tasks/all-tasks.component'),
          },
          {
            path: 'engineering-tasks',
            loadComponent: () => import('./tasks/pages/view-tasks-page/engineering-tasks/engineering-tasks.component'),
          },
          {
            path: 'it-tasks',
            loadComponent: () => import('./tasks/pages/view-tasks-page/it-tasks/it-tasks.component'),
          },
        ]

      },
      {
        path: 'add-task',
        loadComponent: () => import('./tasks/pages/add-task-page/add-task-page.component')
      }
    ]
  },

];
