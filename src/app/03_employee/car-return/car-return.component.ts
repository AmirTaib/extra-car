import { Component, OnInit } from '@angular/core';
import { Car } from '../../05_shared/models/car.model';
import { CarService } from '../../05_shared/services/car.service';
import { Router } from '@angular/router';
import { BranchService } from '../../05_shared/services/branch.service';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-car-return',
  templateUrl: './car-return.component.html',
  styleUrls: ['./car-return.component.scss']
})
export class CarReturnComponent implements OnInit {

  cars: Car[];
  temp: Car[];
  isCatch = true;


  constructor(private carService: CarService,
    private router: Router,
    private branchService: BranchService,
    private carTypeService: CarTypeService) {

  }


  itemClicked(car) {
    this.router.navigate(['/', 'employee', 'close-order', car.carId]);
  }

  ngOnInit() {
    this.carService.getAll().then(result => {
      this.cars = result;

      this.cars.forEach(element => {
        this.carTypeService.getById(element.carTypeId).then(res => {
          element.carType = res;
        });
      });

      this.cars.forEach(element => {
        this.branchService.getById(element.branchId).then(res => {
          element.branch = res;
        });
      });
    });
  }

  updateFilter(event) {

    this.temp = this.cars;
    console.log(this.temp);

    let filterCars;

    const val = event.target.value;
    if (!val) {
      this.temp = [];
      return;
    }

    filterCars = this.temp.filter((d: Car) => {
      if (this.isCatch) {
        return d.carNumber.toString().indexOf(val) !== -1 || !val;
      }
    });
    this.temp = filterCars;
  }
}
