import { Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { CarListComponent } from './car-list/car-list.component';
import { RentCalculationComponent } from './rent-calculation/rent-calculation.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';


export const CarsRoutes: Routes = [
    {
        path: 'branches',
        component: BranchesComponent
    },
    {
        path: 'car-list',
        component: CarListComponent
    },
    {
        path: 'rent-calculation',
        component: RentCalculationComponent
    },
    {
        path: 'car-details',
        component: CarDetailsComponent
    },
    {
        path: 'branch-details/:id',
        component: BranchDetailsComponent
    }
];







