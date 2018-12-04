import { Routes } from '@angular/router';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CarsListManagementComponent } from './cars-list-management/cars-list-management.component';
import { UsersListManagementComponent } from './users-list-management/users-list-management.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditCarTypeComponent } from './edit-car-type/edit-car-type.component';
import { CarTypeListComponent } from './car-type-list/car-type-list.component';
import { BranchesListManagementComponent } from './branches-list-management/branches-list-management.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { AuthGuardService } from '../05_shared/services/authGuard.service';



export const AdminRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'edit-admin',
      canActivate: [AuthGuardService],
      component: EditAdminComponent
    },
    {
      path: 'edit-car/:id',
      canActivate: [AuthGuardService],
      component: EditCarComponent
    },
    {
      path: 'add-car',
      canActivate: [AuthGuardService],
      component: EditCarComponent
    },
    {
      path: 'edit-car-type/:id',
      canActivate: [AuthGuardService],
      component: EditCarTypeComponent
    },
    {
      path: 'add-car-type',
      canActivate: [AuthGuardService],
      component: EditCarTypeComponent
    },
    {
      path: 'car-type-list',
      canActivate: [AuthGuardService],
      component: CarTypeListComponent
    },
    {
      path: 'order-list',
      canActivate: [AuthGuardService],
      component: OrderListComponent
    },
    {
      path: 'cars-list-management',
      canActivate: [AuthGuardService],
      component: CarsListManagementComponent
    },
    {
      path: 'users-list-management',
      canActivate: [AuthGuardService],
      component: UsersListManagementComponent
    },
    {
      path: 'edit-user/:id',
      canActivate: [AuthGuardService],
      component: EditUserComponent
    },
    {
      path: 'add-user',
      canActivate: [AuthGuardService],
      component: EditUserComponent
    },
    {
      path: 'branches-list-management',
      canActivate: [AuthGuardService],
      component: BranchesListManagementComponent
    },
    {
      path: 'edit-branch/:id',
      canActivate: [AuthGuardService],
      component: EditBranchComponent
    },
    {
      path: 'add-branch',
      canActivate: [AuthGuardService],
      component: EditBranchComponent
    }
  ]
}];

