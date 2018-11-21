import { Component, OnInit } from '@angular/core';
import { Order } from '../../05_shared/models/order.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../../05_shared/models/car.model';
import { CarService } from '../../05_shared/services/car.service';
import { BranchService } from '../../05_shared/services/branch.service';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.scss']
})
export class CarRentalComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  product = {
    price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
    rating: Math.floor(Math.random() * 6),
    status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
    discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
    discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
    name: [
      'Blouse',
      'Casual Shirt',
      'Plaid Shirt',
      'Long Sleeve',
      'Denim Jacked',
      'Fur Coat',
      'Crop Top',
      'Stripe Tee'][Math.floor(Math.random() * 8)],
    description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
  };
  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
    rating: Math.floor(Math.random() * 6),
  }, {
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
    rating: Math.floor(Math.random() * 6),
  }, {
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
    rating: Math.floor(Math.random() * 6),
  }];

  car: Car;
  startRent: any;
  endRent: any;
  rentDays: number;
  order: any;
  constructor(private carService: CarService,
    private branchService: BranchService,
    private carTypeService: CarTypeService,
    private activeRouter: ActivatedRoute,
    private router: Router) {

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
    this.activeRouter.params.subscribe(x => {
      const cId = x['id'];
      console.log(cId);
      this.carService.getById(cId).then(result => {
        this.car = result;
        console.log(this.car);
      }).then(() => {
        this.carTypeService.getById(this.car.carTypeId).then(res => {
          this.car.carType = res;
          console.log(this.car.carType);
        }).then(() => {
          this.branchService.getById(this.car.branchId).then(res => {
            this.car.branch = res;
            console.log(this.car.branch);
          });
        });
      }).then(() => {
        const user = JSON.parse(sessionStorage.getItem('user-details'));

        this.order = {
          startDate: this.startRent,
          endDate: this.endRent,
          userId: user.UserId,
          carId: this.car.carId,
        };
        sessionStorage.setItem('current-order', JSON.stringify(this.order));

      });
    });
  }

  returnToCarList() {
    this.router.navigate(['/', 'cars', 'car-list']);
  }

  addOrder() {
    // sessionStorage.setItem('Car Info', JSON.stringify(this.form.value));
    this.router.navigate(['/', 'customer', 'add-order'], { fragment: 'addnew' });
  }

}
