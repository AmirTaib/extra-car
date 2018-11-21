import { Component, OnInit } from '@angular/core';
import { User } from '../../05_shared/models/user.model';
import { CustomerService } from '../../05_shared/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

// const password = new FormControl('', Validators.required);
// const confirmPassword = new FormControl('', CustomValidators.equalTo(password));


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  rows: User;
  user: User;
  form: FormGroup;
  isEdit: boolean;

  constructor(private customerService: CustomerService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';
  }


  ngOnInit() {

    if (this.isEdit) {
      const uId = this.activeRouter.snapshot.params['userName'];
      this.customerService.getUserDetails().then(result => {
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
      email: [this.user.email, Validators.compose([Validators.required, CustomValidators.email])],
      userName: [this.user.userName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      password: [this.user.password, Validators.required],
      // confirmPassword: [this.user.confirmPassword, Validators.required],
      userImage: [this.user.firstName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])]
    });

  }

  onSubmit() {
    if (this.isEdit) {
      this.customerService.updateUserDetails(this.form.value).then(() => {
        this.router.navigate(['/', 'customers', 'personal-area']);
      });
    } else {
      this.customerService.addNewUser(this.form.value).then(() => {
        this.router.navigate(['/', 'customers', 'personal-area']);
      });
    }
  }


}
