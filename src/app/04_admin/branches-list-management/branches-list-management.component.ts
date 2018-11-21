import { Component, OnInit } from '@angular/core';
import { Branch } from '../../05_shared/models/branch.model';
import { BranchService } from '../../05_shared/services/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branches-list-management',
  templateUrl: './branches-list-management.component.html',
  styleUrls: ['./branches-list-management.component.scss']
})
export class BranchesListManagementComponent implements OnInit {

  branches: Branch[];
  temp: Branch[];

  constructor(private branchService: BranchService, private router: Router) {}

  ngOnInit() {
    this.branchService.getAllBranches().then(result => {
      this.branches = this.branchService.branchesList;
      this.temp = this.branches;
    });
  }

  updateFilter(event) {
    console.log('in a func');
    this.temp = this.branches;
    let filterTypes;
    const val = event.target.value.toString();
    filterTypes = this.temp.filter((d: Branch) => {
      return d.branchName.toString().indexOf(val) !== -1;
    });
    this.temp = filterTypes;
  }

  deleteBranch(ev: MouseEvent, id) {
    ev.stopPropagation();
    this.branchService.deleteBranch(id).subscribe((x) => {
      const carToDeleteIndex = this.branches.findIndex(o => o.branchId === id);
      this.branches.splice(carToDeleteIndex, 1);
    });
  }

  itemClicked(item) {
    if (item.type === 'click') {
      const clickItem: Branch = item.row;
      this.router.navigate(['/', 'admin', 'edit-branch', clickItem.branchId]);
    }
  }


  addNewBranch() {
    this.router.navigate(['/', 'admin', 'add-branch'], { fragment: 'addnew' });
  }


}
