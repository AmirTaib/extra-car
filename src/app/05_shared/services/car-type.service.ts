import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarType } from '../models/car-type.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {
  carTypeList: CarType[] = [
    {
      'carTypeId': 1,
      'manufacturerName': 'VOLVO',
      'model': 'S80',
      'dailyCost': 10,
      'costOfDayOverdue': 500,
      'manufactureYear': 2018,
      'isAutoGear': true

    },
    {

      'carTypeId': 2,
      'manufacturerName': 'BMW',
      'model': '5241',
      'dailyCost': 5,
      'costOfDayOverdue': 1000,
      'manufactureYear': 2016,
      'isAutoGear': false

    }
  ];

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<CarType[]> {
    return new Promise<CarType[]>((res, rej) => {
      res(this.carTypeList);
    });
  }

  getById(id): Promise<CarType> {
    return new Promise<CarType>((res, rej) => {
      const carType: CarType = {
        'carTypeId': 3,
        'manufacturerName': 'zz',
        'model': 'zz',
        'dailyCost': 10,
        'costOfDayOverdue': 500,
        'manufactureYear': 2017,
        'isAutoGear': true
      };
      res(carType);
    });
  }

  updateCarType(carType): Promise<CarType> {
    return new Promise<CarType>((res, rej) => {
      res(carType);
    });
  }

  addNewCarType(newCarType): Promise<CarType> {
    return new Promise<CarType>((res, rej) => {
      this.carTypeList.push(newCarType);
      res(newCarType);
    });
  }

  deleteCarType(id: string): Observable<boolean> {
    return of(true);
  }

  getYears(): Promise<number[]> {

    let curentYear: number = new Date().getFullYear();
    const manufactureYearsToDrop: number[] = [];

    for (let i = 0; i < 10; i++) {
      manufactureYearsToDrop[i] = curentYear;
      curentYear--;
    }

    return new Promise<number[]>((res, rej) => {
      res(manufactureYearsToDrop);
    });
  }
  getManufactureNamesToDrop(): Promise<string[]> {

    const manufactureNamesToDrop: string[] = [];
    for (let i = 0; i < this.carTypeList.length; i++) {
      manufactureNamesToDrop[i] = this.carTypeList[i].manufacturerName;
    }

    return new Promise<string[]>((res, rej) => {
      res(manufactureNamesToDrop);
    });
  }
  getModelsToDrop(): Promise<string[]> {
    const modelsToDrop: string[] = [];
    for (let i = 0; i < this.carTypeList.length; i++) {
      modelsToDrop[i] = this.carTypeList[i].model;
    }

    return new Promise<string[]>((res, rej) => {
      res(modelsToDrop);
    });
  }

  getCarsType(): Promise<string[]> {

    const carTypeToDrop: string[] = [];
    for (let i = 0; i < this.carTypeList.length; i++) {
      carTypeToDrop[i] = `${this.carTypeList[i].manufacturerName},
      ${this.carTypeList[i].model},
      ${this.carTypeList[i].manufactureYear}`;
    }

    return new Promise<string[]>((res, rej) => {
      res(carTypeToDrop);
    });
  }




}
