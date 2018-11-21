import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../05_shared/models/car.model';
import { CarService } from '../../05_shared/services/car.service';
import { Order } from '../../05_shared/models/order.model';
import { BranchService } from '../../05_shared/services/branch.service';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-close-order',
  templateUrl: './close-order.component.html',
  styleUrls: ['./close-order.component.scss']
})
export class CloseOrderComponent implements OnInit {
  car: Car;
  carToRent: Order;
  startRent: any;
  endRent: any;
  rentDays: number;

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
      });
    });
  }


  returnToSearchCar() {
    this.router.navigate(['/', 'employee', 'car-return']);
  }

  closeOrder() {
    alert('ההזמנה נסגרה');
    // לשלוח לשרת ולהציג עלות השכרה אמיתית
    // לשלוח לשרת זמן החזרה אמיתי
    // להעביר הזמנה לסטטוס סגור
    // להעביר רכב לסטטוס פנוי
    this.router.navigate(['/', 'employee', 'car-return']);
  }

}
