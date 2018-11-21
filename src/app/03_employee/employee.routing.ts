import { Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CarReturnComponent } from './car-return/car-return.component';
import { CloseOrderComponent } from './close-order/close-order.component';


export const EmployeeRoutes: Routes = [{
    path: '',
    children: [{
        path: 'edit-employee',
        component: EditEmployeeComponent
    }, {
        path: 'car-return',
        component: CarReturnComponent
    }, {
        path: 'close-order/:id',
        component: CloseOrderComponent
    }
    ]
}];





