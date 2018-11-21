import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToEditUser() {
    this.router.navigate(['/', 'customers', 'edit-user']);
  }

  GoToOrderListByUser() {
    this.router.navigate(['/', 'customers', 'order-list-by-user']);
  }

  GoToCarList() {
    this.router.navigate(['/', 'customers', 'order-list-by-user']);  // צריך לחשוב לאיזה דף לשלוח
  }

  GoToCarRental() {
    this.router.navigate(['/', 'customers', 'car-rental']);
  }

}
