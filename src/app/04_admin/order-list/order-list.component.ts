import { Component, OnInit } from '@angular/core';
import { Order } from '../../05_shared/models/order.model';
import { OrderService } from '../../05_shared/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
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
      this.router.navigate(['/', 'admin', 'edit-order', clickItem.orderId]);
    }
  }


  addNewOrder() {
    this.router.navigate(['/', 'admin', 'add-order'], { fragment: 'addnew' });
  }


}
