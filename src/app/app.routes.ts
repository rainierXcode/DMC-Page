import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.page').then((m) => m.HomePage),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./Pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./Pages/history/history.page').then((m) => m.HistoryPage),
  },
  {
    path: 'vision-mission',
    loadComponent: () =>
      import('./Pages/vision-mission/vision-mission.page').then(
        (m) => m.VissionMissionPage
      ),
  },
  {
    path: 'course',
    loadComponent: () =>
      import('./Pages/course/course.page').then((m) => m.CoursePage),
  },
  {
    path: 'organizations',
    loadComponent: () =>
      import('./Pages/organizations/organizations.page').then(
        (m) => m.OrganizationsPage
      ),
  },
  {
    path: 'director',
    loadComponent: () => import('./Pages/director/director.page').then( m => m.DirectorPage)
  },
];
