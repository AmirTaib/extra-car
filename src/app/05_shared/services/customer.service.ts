import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  usersList: User[] = [
    {
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
    },
    {
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
    },
    {
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
    }
  ];


  rentalList: Order[] = [
    {
      'orderId': 1,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 1,
      'userName': 'NoaTaib',
      'carNumber': 4455613
    },
    {
      'orderId': 1,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 1,
      'userName': 'NoaTaib',
      'carNumber': 4455613
    }
  ];


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


  constructor(private http: HttpClient) { }

  getAll(): Promise<User[]> {
    return new Promise<User[]>((res, rej) => {
      res(this.usersList);
    });
  }

  getById(id: number): Promise<User> {
    return new Promise<User>((res, rej) => {
      res(this.userDetails);
    });
  }

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

  deleteUser(id: string): Observable<boolean> {
    return of(true);
  }

  getAllRentalListByCustomer(): Promise<Order[]> {
    return new Promise<Order[]>((res, rej) => {
      res(this.rentalList);
    });
  }

  sendMsg(val): Promise<string> {
    return new Promise<string>((res, rej) => {
      res('');
    });
  }

  getUserByEmail(email: string) {
    return this.http.get<any[]>(`${this.url}?email=${email}`);
  }



}

