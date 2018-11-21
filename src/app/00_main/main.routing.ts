import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from '../05_shared/services/authGuard.service';



export const MainRoutes: Routes = [{

    path: '',
    component: DashboardComponent,
}, {
    path: 'contact-us',
    canActivate: [AuthGuardService],
    component: ContactUsComponent
}, {
    path: 'about-us',
    component: AboutUsComponent
}, {
    path: 'signin',
    component: SigninComponent
}, {
    path: 'signup',
    component: SignupComponent
}

];







