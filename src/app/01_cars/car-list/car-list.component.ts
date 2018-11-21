import { Component, OnInit } from '@angular/core';
import { Car } from '../../05_shared/models/car.model';
import { CarService } from '../../05_shared/services/car.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { BREAKPOINT } from '@angular/flex-layout';
import { Breakpoints } from '@angular/cdk/layout';
import { BranchService } from '../../05_shared/services/branch.service';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {


  freeCars: any;
  modelsToDrop: string[];
  manufactureNamesToDrop: string[];
  manufactureYearsToDrop: number[];
  cars: Car[];
  temp: Car[];
  selected = 'Free Text';
  isAuto: boolean;
  currentYear: number = new Date().getFullYear();
  selectedYear: number;
  minDate = new Date(1980, 1, 1);
  maxDate = new Date();
  selectedManufactureName: string;
  selectedModel: string;
  minStartDate = new Date();
  minEndDate = this.minStartDate;
  startRentDay: any;
  endRentDay: any;

  constructor(private carService: CarService,
    private branchService: BranchService,
    private carTypeService: CarTypeService,
    private router: Router) {
    this.loadYears();
    this.loadManufactureNames();
    this.loadModels();
  }

  // calculateDays(): number {
  //   const numberOfDays = ((this.endRentDay - this.startRentDay) / (24 * 3600 * 1000));
  //   if (numberOfDays < 1) {
  //     return null;
  //   }
  //   return numberOfDays;
  // }

  async loadYears() {
    this.manufactureYearsToDrop = await this.carTypeService.getYears();
  }
  async loadManufactureNames() {
    this.manufactureNamesToDrop = await this.carTypeService.getManufactureNamesToDrop();
  }
  async loadModels() {
    this.modelsToDrop = await this.carTypeService.getModelsToDrop();
  }


  itemClicked(car) {
    if (this.startRentDay && this.endRentDay) {
      this.carService.keepDates(this.startRentDay, this.endRentDay);
      this.router.navigate(['/', 'customer', 'car-rental', car.carId]);
    } else {
      alert('Please select a start and end date...');
    }
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

      this.temp = this.cars;
    });
  }

  getFreeCarsByDays() {
    this.carService.getCarsByDays(this.startRentDay, this.endRentDay).then(res => {
      this.cars = res;
    });
  }

  updateFilter(event?) {

    console.log('in a func');

    this.temp = this.cars;
    let filterCars;

    if (this.selected === 'Gere') {
      const val = this.isAuto.toString();
      filterCars = this.temp.filter((d: Car) => {
        return d.carType.isAutoGear.toString() === val;
      });
    } else if (this.selected === 'Year') {
      const val = this.selectedYear.toString();
      filterCars = this.temp.filter((d: Car) => {
        console.log(val);
        console.log(d.carType.manufactureYear);
        return d.carType.manufactureYear.toString() === val;
      });
    } else if (this.selected === 'Manufacture Name') {
      const val = this.selectedManufactureName;
      filterCars = this.temp.filter((d: Car) => {
        console.log(val);
        console.log(d.carType.manufacturerName);
        return d.carType.manufacturerName === val;
      });
    } else if (this.selected === 'Model') {
      const val = this.selectedModel;
      filterCars = this.temp.filter((d: Car) => {
        console.log(val);
        console.log(d.carType.model);
        return d.carType.model === val;
      });
    } else if (this.selected === 'Free Text') {

      const val = event.target.value.toLowerCase();
      filterCars = this.temp.filter((d: Car) => {
        const carForFreeText = `${d.carType.manufacturerName}
        ${d.carType.manufactureYear}
        ${d.carType.model}
        ${d.carType.isAutoGear ? 'Auto Gear' : 'Manual Gear'}`.toString().toLowerCase();
        console.log(val);
        console.log(carForFreeText);
        return carForFreeText.indexOf(val) !== -1 || !val;
      });
    }
    this.temp = filterCars;
  }


}
