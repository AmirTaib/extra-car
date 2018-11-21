import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  selectOrder: Order =
    {

      'orderId': 4,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 3,
      // 'userName': 'Amir Taib',
      'carNumber': 8382858
    };

  orderList: Order[] = [
    {

      'orderId': 1,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 5,
      'userName': 'Noa Taib',
      'carNumber': 8382858
    },
    {

      'orderId': 2,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 3,
      userName : 'Amiros',
      'carNumber': 8382858
    }
  ];

  orderListByUser: Order[] = [
    {

      'orderId': 1,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 5,
      'userName': 'Noa Taib',
      'carNumber': 8382858
    },
    {

      'orderId': 2,
      'startDate': new Date(8, 6, 2018),
      'endDate': new Date(8, 7, 2018),
      'realEndDate': new Date(8, 8, 2018),
      'userId': 5,
      'userName' : 'Noa Taib',
      'carNumber': 8382858
    }
  ];

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Order[]> {
    return new Promise<Order[]>((res, rej) => {
      res(this.orderList);
    });
  }

  getById(id): Promise<Order> {
    return new Promise<Order>((res, rej) => {
      const order: Order = {
        'orderId': 3,
        'startDate': new Date(8, 6, 2018),
        'endDate': new Date(8, 7, 2018),
        'realEndDate': new Date(8, 8, 2018),
        'userId': 3,
        'carId': 3,
        'carNumber': 8382858
      };
      res(order);
    });
  }

  updateOrder(order): Promise<Order> {
    return new Promise<Order>((res, rej) => {
      res(order);
    });
  }

  addNewOrder(neworder): Promise<Order> {
    return new Promise<Order>((res, rej) => {
      this.orderList.push(neworder);
      res(neworder);
    });
  }

  deleteOrder(id: string): Observable<boolean> {
    return of(true);
  }

  SelectOrder(): Promise<Order> {
    return new Promise<Order>((res, rej) => {
      res(this.selectOrder);
    });
  }

}
