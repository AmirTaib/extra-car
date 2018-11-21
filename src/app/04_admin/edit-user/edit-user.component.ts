import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { User } from '../../05_shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../05_shared/services/admin.service';
import { uniqueEmailValidator } from '../../05_shared/directives/unique-email-validator.directive';
import { CustomerService } from '../../05_shared/services/customer.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  rows: User;
  user: User;
  form: FormGroup;
  isEdit: boolean;


  minDate: Date = new Date(
    new Date().getFullYear() - 120,
    new Date().getMonth(),
    new Date().getDate());
  maxDate: Date = new Date();

  constructor(private adminService: AdminService,
    private customerService: CustomerService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';
  }


  ngOnInit() {

    if (this.isEdit) {
      const uId = this.activeRouter.snapshot.params['userName'];
      this.adminService.getUserDetails().then(result => {
        this.user = result;
        this.setForm();
      });
    } else {
      this.user = new User();
      this.setForm();
    }

  }



  setForm() {

    this.form = this.fb.group({
      UserId: [this.user.UserId],
      firstName: [this.user.firstName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      lastName: [this.user.lastName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      birthDate: [this.user.birthDate, Validators.compose([Validators.required, CustomValidators.date])],
      gender: [this.user.gender, Validators.required],
      // tslint:disable-next-line:max-line-length
      email: [this.user.email, Validators.compose([Validators.required, CustomValidators.email])],
      userName: [this.user.userName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      password: [this.user.password, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
      // confirmPassword: [this.user.confirmPassword, CustomValidators.equalTo(this.user.password)],
      userImage: [this.user.firstName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])]
    });

  }

  onSubmit() {
    if (this.isEdit) {
      this.adminService.updateUserDetails(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'users-list-management']);

      });
    } else {
      this.adminService.addNewUser(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'users-list-management']);
      });
    }
  }

}
