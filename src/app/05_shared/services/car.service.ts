import { Injectable } from '@angular/core';
import { CarType } from '../models/car-type.model';
import { Branch } from '../models/branch.model';
import { Car } from '../models/car.model';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  datesKeeper: any;

  selectCar: Order =
    {

      'orderId': 1,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 3,
      'carNumber': 8382858
    };

  carList: Car[] = [
    {
      'carId': 1,
      'carTypeId': 1,
      'kilometrage': 300000,
      'imgCar': 'volvo',
      'isProperForRent': true,
      // 'isAvailableForRent': true,
      'carNumber': 4455613,
      'branchId': 1
    },
    {
      'carId': 2,
      'carTypeId': 2,
      'kilometrage': 300000,
      'imgCar': 'volvo',
      'isProperForRent': false,
      // 'isAvailableForRent': false,
      'carNumber': 8382858,
      'branchId': 1
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Car[]> {
    return new Promise<Car[]>((res, rej) => {
      res(this.carList);
    });
  }

  getById(id): Promise<Car> {
    return new Promise<Car>((res, rej) => {
      const car: Car = {
        'carId': 1,
        'carTypeId': 2,
        'kilometrage': 300000,
        'imgCar': 'volvo',
        'isProperForRent': true,
        'carNumber': 4455613,
        'branchId': 5
      };
      res(car);
    });
  }

  updateCar(car): Promise<Car> {
    return new Promise<Car>((res, rej) => {
      res(car);
    });
  }

  addNewCar(newCar): Promise<Car> {
    return new Promise<Car>((res, rej) => {
      this.carList.push(newCar);
      res(newCar);
    });
  }

  deleteCar(id: string): Observable<boolean> {
    return of(true);
  }

  SelectCar(): Promise<Order> {
    return new Promise<Order>((res, rej) => {
      res(this.selectCar);
    });
  }

  getCarsByDays(startRent, endRent): Promise<Car[]> { // יבצע את החיפוש בבסיס הנתונים ויחזיר רק את הרכבים הרלוונטים
    return new Promise<Car[]>((res, rej) => {
      res(this.carList);
    });
  }

  keepDates(startRent, endRent) {
    this.datesKeeper = {
      'startRent': startRent,
      'endRent': endRent
    };
  }

  getDatesKeeper(): Promise<any> {
    const datesKeeper = {
      'startRent': new Date(),
      'endRent': new Date(),
    };
    return new Promise<any>((res, rej) => {
      res(this.datesKeeper);
    });
  }





}
