import { CarType } from './car-type.model';
import { Branch } from './branch.model';

export class Car {
    carId: number;
    carType?: CarType;
    carTypeId: number;
    kilometrage: number;
    imgCar: string;
    isProperForRent = false;
    // isAvailableForRent = false; // לבדוק בטבלת ההזמנות, לא ליצור כאן משתנה כזה
    carNumber: number;
    branch?: Branch;
    branchId: number;


    constructor() {
        this.carType = new CarType();
        this.branch = new Branch();
    }
}

