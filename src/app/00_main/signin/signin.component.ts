import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../05_shared/services/customer.service';
import { AuthGuardService } from '../../05_shared/services/authGuard.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  return = '';
  isValidLogin = true;

  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthGuardService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(p => {
      this.return = p['return'] || '/';
    });
    console.log(this.return);
    this.form = this.fb.group({
      userName: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.authService.isLogin(this.form.value).then((result) => {
      if (!result) {
        this.isValidLogin = false;
      } else {
        this.isValidLogin = true;
        this.router.navigateByUrl(this.return);
      }
    });
  }

}
