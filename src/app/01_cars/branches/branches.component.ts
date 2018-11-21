import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from '../../05_shared/models/branch.model';
import { BranchService } from '../../05_shared/services/branch.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {

  branches: Branch[];


  constructor(private branchService: BranchService, private router: Router) { }

  ngOnInit() {
    this.branchService.getAllBranches().then(result => {
      this.branches = result;
    });
  }

  showDetails(id) {
    console.log(id);
    this.router.navigate(['/', 'cars', 'branch-details', id]);
  }


}
