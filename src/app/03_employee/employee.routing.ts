import { Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CarReturnComponent } from './car-return/car-return.component';
import { CloseOrderComponent } from './close-order/close-order.component';
import { AuthGuardService } from '../05_shared/services/authGuard.service';


export const EmployeeRoutes: Routes = [{
    path: '',
    children: [{
        path: 'edit-employee',
        canActivate: [AuthGuardService],
        component: EditEmployeeComponent
    }, {
        path: 'car-return',
        canActivate: [AuthGuardService],
        component: CarReturnComponent
    }, {
        path: 'close-order/:id',
        canActivate: [AuthGuardService],
        component: CloseOrderComponent
    }
    ]
}];





