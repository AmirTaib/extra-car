
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule, MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioButton
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { OrderListByCustomerComponent } from './order-list-by-customer/order-list-by-customer.component';
import { CustomerRoutes } from './customer.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';
import { MatRadioModule } from '@angular/material/radio';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { EditOrderComponent } from './edit-order/edit-order.component';


@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    RouterModule.forChild(CustomerRoutes),
    MatToolbarModule,
    MatIconModule,
    NgxDatatableModule,
    FileUploadModule,
    QuillModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    CalendarModule.forRoot(),
    FlexLayoutModule,
    ChartsModule,
    PerfectScrollbarModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditCustomerComponent,
    CarRentalComponent,
    OrderListByCustomerComponent,
    PersonalAreaComponent,
    EditOrderComponent
  ]
})
export class CustomerModule { }
