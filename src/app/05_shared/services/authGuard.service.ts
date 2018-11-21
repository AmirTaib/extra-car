import { Injectable } from '@angular/core';
import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  currentUser: any;
  currentUserName: BehaviorSubject<string>;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.currentUser = sessionStorage.getItem('current-user');
    if (this.currentUser) {
      return true;
    } else {
      this.router.navigate(['/', 'signin'], {
        queryParams: {
          return: state.url
        }
      });
      sessionStorage.setItem('url', JSON.stringify(state.url));
      return false;
    }
  }

  constructor(private router: Router) {
    this.currentUser = JSON.parse(sessionStorage.getItem('current-user'));
    if (this.currentUser) {
      this.currentUserName = new BehaviorSubject<string>(this.currentUser.userName);
    } else {
      this.currentUserName = new BehaviorSubject<string>('');
    }
  }

  isLogin(user): Promise<User> {
    return new Promise<User>((res, rej) => {
      const userToIn: User = {
        UserId: 1,
        firstName: 'amir',
        lastName: 'taib',
        ID: '300556354',
        birthDate: new Date(1987, 2, 1),
        gender: 'male',
        email: 'amirtaib@gmail.com',
        userName: 'aMiRtAiB',
        password: '123456',
        userImage: 'amir.jpg',
        userRole: 'admin'
      };

      if (user.userName === userToIn.userName && user.password === userToIn.password) {
        this.currentUserName.next(userToIn.userName);
        sessionStorage.setItem('current-user', JSON.stringify(user));
        sessionStorage.setItem('user-details', JSON.stringify(userToIn));
        res(userToIn);
      }
      res(null);
    });
  }

  logout() {
    this.currentUser = sessionStorage.setItem('current-user', '');
  }

}
