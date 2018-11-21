import { Component, OnInit } from '@angular/core';
import { CarType } from '../../05_shared/models/car-type.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarTypeService } from '../../05_shared/services/car-type.service';

@Component({
  selector: 'app-edit-car-type',
  templateUrl: './edit-car-type.component.html',
  styleUrls: ['./edit-car-type.component.scss']
})
export class EditCarTypeComponent implements OnInit {

  form: FormGroup;
  isEdit: boolean;
  carType: CarType;
  manufactureYearsToDrop: number[];

  constructor(private router: Router,
    private activeRouter: ActivatedRoute,
    private carTypeService: CarTypeService,
    private fb: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';
    this.loadYears();
  }

  async loadYears() {
    this.manufactureYearsToDrop = await this.carTypeService.getYears();
  }

  async ngOnInit() {
    if (this.isEdit) {
      this.activeRouter.params.subscribe(x => {
        const cId = x['id'];
        this.carTypeService.getById(cId).then(result => {
          this.carType = result;
          this.setForm();
        });
      });
    } else {
      this.carType = new CarType();
      this.setForm();
    }
  }

  setForm() {
    this.form = this.fb.group({
      carTypeId: [this.carType.carTypeId],
      // tslint:disable-next-line:max-line-length
      manufacturerName: [this.carType.manufacturerName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      model: [this.carType.model, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      dailyCost: [this.carType.dailyCost, Validators.compose([Validators.required, Validators.min(100), Validators.max(9999)])],
      // tslint:disable-next-line:max-line-length
      costOfDayOverdue: [this.carType.costOfDayOverdue, Validators.compose([Validators.required, Validators.min(100), Validators.max(9999)])],
      // tslint:disable-next-line:max-line-length
      manufactureYear: [this.carType.manufactureYear, Validators.compose([Validators.required, Validators.min((new Date().getFullYear()) - 10), Validators.max(new Date().getFullYear())])],
      isAutoGear: [this.carType.isAutoGear, Validators.compose([Validators.required])],
    });

  }

  onSubmit() {
    sessionStorage.setItem('Car Info', JSON.stringify(this.form.value));
    if (this.isEdit) {
      this.carTypeService.updateCarType(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'car-type-list']);
      });
    } else {
      this.carTypeService.addNewCarType(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'car-type-list']);
      });
    }
  }

}
