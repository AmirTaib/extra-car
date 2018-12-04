import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private role: string;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canActivate');

    if (this.getRole() === '') {
      this.router.navigate(['/']);
      return false;
    }
    if (this.getRole() === 'admin') {
      return true;
    }
    if (state.url.indexOf(this.getRole()) !== -1) {
      return true;
    }
    if (
      state.url.indexOf('customer') === -1 &&
      state.url.indexOf('admin') === -1 &&
      state.url.indexOf('employee') === -1) {
      return true;
    }
    if (this.getRole() === 'employee' && state.url.indexOf('customer') !== -1) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

  constructor(private router: Router) {
    // debugger;
    this.role = 'admin';

  }

  getRole() {
    return this.role;
  }

}


// console.log('***state.url:  ' + state.url + '***role:  ' + role + '***this.getRole():  ' + this.getRole());
// const roles = ['customer', 'admin', 'employee']; // admin
// let isPermissionPages = false;
// roles.forEach(role => {
//   if (state.url.indexOf(role) !== -1) {
//     isPermissionPages = true;
//     if (this.getRole() === role) {
//       return true;
//     }
//   }
// });
// if (!isPermissionPages) {
//   return true;
// }

// return true;
