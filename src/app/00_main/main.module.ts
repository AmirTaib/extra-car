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
  MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { AboutUsComponent } from './about-us/about-us.component';
import { MainRoutes } from './main.routing';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { UICarouselModule } from 'ui-carousel';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    UICarouselModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
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
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
  ]
})

export class MainModule { }
