import { Component, OnInit } from '@angular/core';
import { Car } from '../../05_shared/models/car.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../05_shared/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  form: FormGroup;
  car: Car;
  isEdit: boolean;

  constructor(private router: Router,
    private activeRouter: ActivatedRoute,
    private carService: CarService,
    private fb: FormBuilder,
    private fb1: FormBuilder,
    private fb2: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';
  }

  ngOnInit() {
    if (this.isEdit) {
      const cId = this.activeRouter.snapshot.params['carId'];
      this.carService.getById(cId).then(result => {
        this.car = result;
        this.setForm();
      });
    } else {
      this.car = new Car();
      this.setForm();
    }
  }

  setForm() {
    this.form = this.fb.group({
      carId: [this.car.carId],
      carType: this.fb1.group({
        manufacturerName: [this.car.carType.manufacturerName, Validators.compose([Validators.required])],
        model: [this.car.carType.model, Validators.compose([Validators.required])],
        dailyCost: [this.car.carType.dailyCost, Validators.compose([Validators.required])],
        manufactureYear: [this.car.carType.manufactureYear, Validators.compose([Validators.required])],
        isAutoGear: [this.car.carType.isAutoGear, Validators.compose([Validators.required])]
      }),
      kilometrage: [this.car.kilometrage, Validators.compose([Validators.required])],
      imgCar: [this.car.imgCar, Validators.compose([Validators.required])],
      isProperForRent: [this.car.isProperForRent, Validators.compose([Validators.required])],
      // isAvailableForRent: [this.car.isAvailableForRent, Validators.compose([Validators.required])],
      carNumber: [this.car.carNumber, Validators.compose([Validators.required])],
      branch: this.fb2.group({
        address: [this.car.branch.address, Validators.compose([Validators.required])],
        latitude: [this.car.branch.latitude, Validators.compose([Validators.required])],
        longitude: [this.car.branch.longitude, Validators.compose([Validators.required])],
        branchName: [this.car.branch.branchName, Validators.compose([Validators.required])]
      }),
    });
  }

  onSubmit() {
    if (this.isEdit) {
      this.carService.updateCar(this.form.value).then(() => {
        this.router.navigate(['/car-list']);
      });
    } else {
      this.carService.addNewCar(this.form.value).then(() => {
        this.router.navigate(['/car-list']);
      });
    }

  }

}
