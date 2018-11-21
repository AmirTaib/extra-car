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
  MatRadioModule,
  MatDatepickerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppsRoutes } from '../apps/apps.routing';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { CarsListManagementComponent } from './cars-list-management/cars-list-management.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UsersListManagementComponent } from './users-list-management/users-list-management.component';
import { AdminRoutes } from './admin.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { QuillModule } from 'ngx-quill';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarTypeListComponent } from './car-type-list/car-type-list.component';
import { EditCarTypeComponent } from './edit-car-type/edit-car-type.component';
import { CustomerModule } from '../02_customers/customer.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { BranchesListManagementComponent } from './branches-list-management/branches-list-management.component';
import { AutocompleteFilterBranchesComponent } from './autocomplete-filter-branches/autocomplete-filter-branches.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteFilterCarTypeComponent } from './autocomplete-filter-car-type/autocomplete-filter-car-type.component';
import { AutocompleteFilterUsersComponent } from './autocomplete-filter-users/autocomplete-filter-users.component';
import { AutocompleteFilterCarsComponent } from './autocomplete-filter-cars/autocomplete-filter-cars.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    NgxDatatableModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatDatepickerModule,
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
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxDatatableModule,
    QuillModule,
    MatInputModule,
    CustomerModule
  ],
  declarations: [
    EditAdminComponent,
    CarsListManagementComponent,
    EditCarComponent,
    OrderListComponent,
    UsersListManagementComponent,
    CarTypeListComponent,
    EditCarTypeComponent,
    EditUserComponent,
    EditBranchComponent,
    BranchesListManagementComponent,
    AutocompleteFilterBranchesComponent,
    AutocompleteFilterCarTypeComponent,
    AutocompleteFilterUsersComponent,
    AutocompleteFilterCarsComponent
  ]
})

export class AdminModule { }
