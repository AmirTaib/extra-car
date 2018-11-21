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
  MatNativeDateModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { CarListComponent } from './car-list/car-list.component';
import { RentCalculationComponent } from './rent-calculation/rent-calculation.component';
import { BranchesComponent } from './branches/branches.component';
import { CarDetailsComponent } from './car-details/car-details.component';

import { CarsRoutes } from './cars.routing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CarsRoutes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
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
    CalendarModule.forRoot(),
    FlexLayoutModule,
    ChartsModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    BranchesComponent,
    CarListComponent,
    RentCalculationComponent,
    CarDetailsComponent,
    BranchDetailsComponent
  ]
})

export class CarsModule { }
