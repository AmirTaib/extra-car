import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuardService } from './05_shared/services/authGuard.service';
import { AuthService } from './05_shared/services/auth.service';




export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './00_main/main.module#MainModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'main',
    loadChildren: './00_main/main.module#MainModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'cars',
    loadChildren: './01_cars/cars.module#CarsModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'customer',
    canActivate: [AuthService],
    loadChildren: './02_customers/customer.module#CustomerModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'employee',
    canActivate: [AuthService],
    loadChildren: './03_employee/employee.module#EmployeeModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'admin',
    canActivate: [AuthService],
    loadChildren: './04_admin/admin.module#AdminModule'
  }]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
},
{
  path: '**',
  redirectTo: 'session/404'
}];
