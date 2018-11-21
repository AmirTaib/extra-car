import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userDetails: User = {
    'UserId': 1,
    'ID': '300556954',
    'firstName': 'amir',
    'lastName': 'taib',
    'birthDate': new Date(1987, 3, 12),
    'gender': 'male',
    'email': 'amirtaib@gmail.com',
    'userName': 'aMiR',
    'password': '1234',
    // 'confirmPassword': '1234',
    'userImage': 'amir.jpg',
    'userRole': 'admin'
  };

  constructor() { }

  getUserDetails(): Promise<User> {
    return new Promise<User>((res, rej) => {

      res(this.userDetails);
    });
  }

  updateUserDetails(userDetails): Promise<User> {
    console.log(userDetails);
    return new Promise<User>((res, rej) => {
      res(userDetails);
    });
  }

  addNewUser(newUser): Promise<User> {
    return new Promise<User>((res, rej) => {
      res(newUser);
    });
  }

}
