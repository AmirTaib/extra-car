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
  MatNativeDateModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CarReturnComponent } from './car-return/car-return.component';
import { EmployeeRoutes } from './employee.routing';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CloseOrderComponent } from './close-order/close-order.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes),
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    CalendarModule.forRoot(),
    FlexLayoutModule,
    ChartsModule,
    PerfectScrollbarModule
  ],
  declarations: [
    EditEmployeeComponent,
    CarReturnComponent,
    CloseOrderComponent
  ]
})

export class EmployeeModule { }
