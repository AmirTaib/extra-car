import { Component, OnInit } from '@angular/core';
import { Car } from '../../05_shared/models/car.model';
import { CarService } from '../../05_shared/services/car.service';
import { Router } from '@angular/router';
import { BranchService } from '../../05_shared/services/branch.service';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-cars-list-management',
  templateUrl: './cars-list-management.component.html',
  styleUrls: ['./cars-list-management.component.scss']
})
export class CarsListManagementComponent implements OnInit {

  cars: Car[];
  temp: Car[];

  constructor(
    private carService: CarService,
    private branchService: BranchService,
    private carTypeService: CarTypeService,
    private router: Router) { }

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

      this.temp = this.cars;
    });
  }

  updateFilter(event) {
    console.log('in a func');
    this.temp = this.cars;
    let filterCars;
    const val = event.target.value.toString();
    filterCars = this.temp.filter((d: Car) => {
      return d.carNumber.toString().indexOf(val) !== -1;
    });
    this.temp = filterCars;
  }

  deleteCar(ev: MouseEvent, id) {
    ev.stopPropagation();
    this.carService.deleteCar(id).subscribe((x) => {
      const carToDeleteIndex = this.cars.findIndex(o => o.carId === id);
      this.cars.splice(carToDeleteIndex, 1);
    });
  }

  itemClicked(item) {
    if (item.type === 'click') {
      const clickItem: Car = item.row;
      this.router.navigate(['/', 'admin', 'edit-car', clickItem.carId]);
    }
  }


  addNewCar() {
    this.router.navigate(['/', 'admin', 'add-car'], { fragment: 'addnew' });
  }

}
