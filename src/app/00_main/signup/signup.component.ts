import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../05_shared/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../05_shared/models/user.model';
import { CustomValidators } from 'ng2-validation';
import { AuthGuardService } from '../../05_shared/services/authGuard.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // user: User;
  form: FormGroup;

  constructor(private customerService: CustomerService,
    private authGuardService: AuthGuardService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setForm();
  }

  setForm() {

    this.form = this.fb.group({
      UserId: [null],
      firstName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      lastName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      birthDate: [null, Validators.compose([Validators.required, CustomValidators.date])],
      gender: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      userName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      password: [null, Validators.required],
      userImage: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])]
    });
  }

  onSubmit() {
    this.customerService.addNewUser(this.form.value).then(() => {
      this.authGuardService.isLogin(this.form.value);
      this.router.navigateByUrl(JSON.parse(sessionStorage.getItem('url')));
    });

  }

}
