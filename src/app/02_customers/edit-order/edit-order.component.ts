import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Order } from '../../05_shared/models/order.model';
import { OrderService } from '../../05_shared/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../05_shared/services/car.service';
import { Car } from '../../05_shared/models/car.model';
import { AutocompleteValue } from '../../05_shared/models/autocomplete-value.model';
import { CustomerService } from '../../05_shared/services/customer.service';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  orderFromSessionStorage: any;
  rentDays: number;
  endRent: any;
  startRent: any;
  car: Car;
  rows: Order;
  order: Order;
  form: FormGroup;
  isEdit: boolean;
  minStartDate: Date = new Date();
  minEndDate: Date = new Date();
  modelToOrder: string;
  dailyCostToOrder: number;
  userNameToOrder: string;

  constructor(private orderService: OrderService,
    private carService: CarService,
    private carTypeService: CarTypeService,
    private customerService: CustomerService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';

    this.carService.getDatesKeeper().then(result => {
      if (result) {
        this.startRent = result.startRent;
        this.endRent = result.endRent;
      } else {
        this.startRent = new Date();
        this.endRent = new Date();
      }
    }).then(() => {
      if ((this.endRent - this.startRent) > 0) {
        this.rentDays = (this.endRent - this.startRent) / (24 * 3600 * 1000);
      } else {
        this.rentDays = 1;
      }
    });
  }


  ngOnInit() {

    if (this.isEdit) {
      const oId = this.activeRouter.snapshot.params['orderId'];
      this.orderService.getById(oId).then(result => {
        this.order = result;
      }).then(() => {
        console.log('carId : ' + this.order.carId);
        console.log('userId : ' + this.order.userId);

        this.getUserAndCar();
      });
    } else {
      this.orderFromSessionStorage = JSON.parse(sessionStorage.getItem('current-order'));

      this.order = new Order();
      this.order.carId = this.orderFromSessionStorage.carId;
      this.order.userId = this.orderFromSessionStorage.userId;

      this.getUserAndCar();
    }

  }

  getUserAndCar() {

    this.carService.getById(this.order.carId).then(result => {
      this.carTypeService.getById(result.carTypeId).then((res) => {
        this.modelToOrder = res.model;
        this.dailyCostToOrder = res.dailyCost;
      });
    }).then(() => {
      this.customerService.getById(this.order.userId).then(result => {
        this.userNameToOrder = result.userName;
      });
    }).then(() => {
      this.setForm();
    });
  }

  setForm() {
    this.form = this.fb.group({
      carId: [this.order.carId],
      userId: [this.order.userId],
      startDate: [{ value: this.startRent, disabled: true }],
      // [, Validators.compose([Validators.required, CustomValidators.date])],
      endDate: [{ value: this.endRent, disabled: true }],
      // [this.endRent, Validators.compose([Validators.required, CustomValidators.date])],
      userNameToOrder: [{ value: this.userNameToOrder, disabled: true }],
      modelToOrder: [{ value: this.modelToOrder, disabled: true }],
      totalPrice: [{ value: this.rentDays * this.dailyCostToOrder, disabled: true }]
    });
  }

  onSubmit() {
    console.log(this.router.routerState.snapshot.url);
    if (this.isEdit) {

      if (this.router.routerState.snapshot.url.indexOf('admin') !== -1) {
        this.orderService.updateOrder(this.form.value).then(() => {
          this.router.navigate(['/', 'admin', 'order-list']);
        });
      } else {
        this.orderService.updateOrder(this.form.value).then(() => {
          this.router.navigate(['/', 'customer', 'order-list-by-customer']);
        });
      }
    } else {

      if (this.router.routerState.snapshot.url.indexOf('admin') !== -1) {
        this.orderService.addNewOrder(this.form.value).then(() => {
          this.router.navigate(['/', 'admin', 'order-list']);
        });
      } else {
        this.orderService.addNewOrder(this.form.value).then(() => {
          this.router.navigate(['/', 'customer', 'order-list-by-customer']);
        });
      }
    }
  }
}
