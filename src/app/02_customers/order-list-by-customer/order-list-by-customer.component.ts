import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../05_shared/services/customer.service';
import { Router } from '@angular/router';
import { Order } from '../../05_shared/models/order.model';
import { OrderService } from '../../05_shared/services/order.service';

@Component({
  selector: 'app-order-list-by-customer',
  templateUrl: './order-list-by-customer.component.html',
  styleUrls: ['./order-list-by-customer.component.scss']
})
export class OrderListByCustomerComponent implements OnInit {

  orders: Order[];
  temp: Order[];

  constructor(private orderService: OrderService, private router: Router) {
  }



  ngOnInit() {
    this.orderService.getAll().then(result => {
      this.orders = this.orderService.orderList;
      this.temp = this.orders;

    });
  }

  updateFilter(event) {
    console.log('in a func');
    this.temp = this.orders;
    let filterOrders;
    const val = event.target.value.toString();
    filterOrders = this.temp.filter((d: Order) => {
      return d.carNumber.toString().indexOf(val) !== -1;
    });
    this.temp = filterOrders;
  }

  deleteOrder(ev: MouseEvent, id) {
    ev.stopPropagation();
    this.orderService.deleteOrder(id).subscribe((x) => {
      const orderToDeleteIndex = this.orders.findIndex(o => o.orderId === id);
      this.orders.splice(orderToDeleteIndex, 1);
    });
  }

  itemClicked(item) {
    if (item.type === 'click') {
      const clickItem: Order = item.row;
      this.router.navigate(['/', 'customer', 'edit-order', clickItem.orderId]);
    }
  }

}
