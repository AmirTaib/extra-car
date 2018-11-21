import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  product = {
    price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
    rating: Math.floor(Math.random() * 6),
    status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
    discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
    discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
    name: [
      'Blouse',
      'Casual Shirt',
      'Plaid Shirt',
      'Long Sleeve',
      'Denim Jacked',
      'Fur Coat',
      'Crop Top',
      'Stripe Tee'][Math.floor(Math.random() * 8)],
    description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
  };

  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'The best cars I\'ve ever traveled',
    photo: 'assets/images/face3.jpg',
    subject: 'Excellent service',
    rating: Math.floor(Math.random() * 6),
  }, {
    from: 'Trevor Hansen',
    message: 'The best cars I\'ve ever traveled',
    photo: 'assets/images/face6.jpg',
    subject: 'Excellent service',
    rating: Math.floor(Math.random() * 6),
  }, {
    from: 'Sandra Adams',
    message: 'The best cars I\'ve ever traveled',
    photo: 'assets/images/face4.jpg',
    subject: 'Excellent service',
    rating: Math.floor(Math.random() * 6),
  }];

  constructor() { }

  ngOnInit() {
  }



}
