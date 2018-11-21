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



export const AdminRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'edit-admin',
      component: EditAdminComponent
    },
    {
      path: 'edit-car/:id',
      component: EditCarComponent
    },
    {
      path: 'add-car',
      component: EditCarComponent
    },
    {
      path: 'edit-car-type/:id',
      component: EditCarTypeComponent
    },
    {
      path: 'add-car-type',
      component: EditCarTypeComponent
    },
    {
      path: 'car-type-list',
      component: CarTypeListComponent
    },
    {
      path: 'order-list',
      component: OrderListComponent
    },
    {
      path: 'cars-list-management',
      component: CarsListManagementComponent
    },
    {
      path: 'users-list-management',
      component: UsersListManagementComponent
    },
    {
      path: 'edit-user/:id',
      component: EditUserComponent
    },
    {
      path: 'add-user',
      component: EditUserComponent
    },
    {
      path: 'branches-list-management',
      component: BranchesListManagementComponent
    },
    {
      path: 'edit-branch/:id',
      component: EditBranchComponent
    },
    {
      path: 'add-branch',
      component: EditBranchComponent
    }
  ]
}];

