import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', loadComponent: () =>
      import('./components/contact-list/contact-list.component')
  }
];
