import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../05_shared/services/customer.service';
import { User } from '../../05_shared/models/user.model';

@Component({
  selector: 'app-users-list-management',
  templateUrl: './users-list-management.component.html',
  styleUrls: ['./users-list-management.component.scss']
})
export class UsersListManagementComponent implements OnInit {

  users: User[];
  temp: User[];

  constructor(private userService: CustomerService, private router: Router) {
  }



  ngOnInit() {
    this.userService.getAll().then(result => {
      this.users = this.userService.usersList;
      this.temp = this.users;

    });
  }

  updateFilter(event) {
    console.log('in a func');
    this.temp = this.users;
    let filterUsers;
    const val = event.target.value.toString();
    filterUsers = this.temp.filter((d: User) => {
      return d.ID.toString().indexOf(val) !== -1;
    });
    this.temp = filterUsers;
  }

  deleteUser(ev: MouseEvent, id) {
    ev.stopPropagation();
    this.userService.deleteUser(id).subscribe((x) => {
      const UserToDeleteIndex = this.users.findIndex(o => o.UserId === id);
      this.users.splice(UserToDeleteIndex, 1);
    });
  }

  itemClicked(item) {
    if (item.type === 'click') {
      const clickItem: User = item.row;
      this.router.navigate(['/', 'admin', 'edit-user', clickItem.UserId]);
    }
  }


  addNewUser() {
    this.router.navigate(['/', 'admin', 'add-user'], { fragment: 'addnew' });
  }
}
