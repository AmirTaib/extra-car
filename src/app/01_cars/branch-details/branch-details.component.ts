import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../05_shared/services/branch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Branch } from '../../05_shared/models/branch.model';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.scss']
})
export class BranchDetailsComponent implements OnInit {

  branch: Branch;

  constructor(private branchService: BranchService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(x => {
      console.log(x);
      const cId = x['id'];
      this.branchService.getById(cId).then(result => {
        this.branch = result;
      });
    });
  }

}
