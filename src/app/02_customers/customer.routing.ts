import { Routes } from '@angular/router';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { OrderListByCustomerComponent } from './order-list-by-customer/order-list-by-customer.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AuthGuardService } from '../05_shared/services/authGuard.service';



export const CustomerRoutes: Routes = [{
    path: '',
    children: [{
        path: 'edit-customer',
        component: EditCustomerComponent
    },
    {
        path: 'add-customer',
        component: EditCustomerComponent
    }, {
        path: 'edit-order/:id',
        component: EditOrderComponent
    },
    {
        path: 'add-order',
        component: EditOrderComponent
    }, {
        path: 'car-rental/:id',
        component: CarRentalComponent
    }, {
        path: 'order-list-by-customer',
        component: OrderListByCustomerComponent
    },
    {
        path: 'personal-area',
        component: PersonalAreaComponent
    }
    ]
}];





