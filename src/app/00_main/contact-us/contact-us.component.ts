import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CustomerService } from '../../05_shared/services/customer.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;

  constructor(private customerService: CustomerService, private router: Router, private fb: FormBuilder) { }


  ngOnInit() {
    this.setForm();
  }



  setForm() {

    this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      lastName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required])],
      msg: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    });

  }

  onSubmit() {
    this.customerService.sendMsg(this.form.value).then(() => {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);
      alert('Thank you\nBe in touch...');
    });
  }
}

