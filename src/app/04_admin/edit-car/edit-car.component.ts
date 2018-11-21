import { Component, OnInit } from '@angular/core';
import { CarService } from '../../05_shared/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../05_shared/models/car.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  form: FormGroup;
  isEdit: boolean;
  car: Car;
  // carTypeToDrop: string[];

  constructor(private router: Router,
    private activeRouter: ActivatedRoute,
    private carService: CarService,
    private carTypeService: CarTypeService,
    private fb: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';
    // this.loadCarType();
  }

  // async loadCarType() {
  //   this.carTypeToDrop = await this.carTypeService.getCarsType();
  // }

  async ngOnInit() {
    if (this.isEdit) {
      this.activeRouter.params.subscribe(x => {
        const cId = x['id'];
        this.carService.getById(cId).then(result => {
          this.car = result;
          this.setForm();
        });
      });
    } else {
      this.car = new Car();
      this.setForm();
    }
  }

  setForm() {
    this.form = this.fb.group({
      // carId: [this.car.carId],
      carTypeId: [this.car.carTypeId, Validators.compose([Validators.required])],
      kilometrage: [this.car.kilometrage, Validators.compose([Validators.required, Validators.min(0), Validators.max(700000)])],
      // imgCar: [this.car.imgCar, Validators.compose([Validators.required])],
      isProperForRent: [this.car.isProperForRent, Validators.compose([Validators.required])],
      // isAvailableForRent: [this.car.isAvailableForRent, Validators.compose([Validators.required])],
      carNumber: [this.car.carNumber, Validators.compose([Validators.required, Validators.min(1000000), Validators.max(99999999)])],
      branchId: [this.car.branchId, Validators.compose([Validators.required])]
    });

  }

  onSubmit() {
    if (this.isEdit) {
      this.carService.updateCar(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'cars-list-management']);
      });
    } else {
      this.carService.addNewCar(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'cars-list-management']);
      });
    }
  }

}
