import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Branch } from '../../05_shared/models/branch.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchService } from '../../05_shared/services/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.scss']
})
export class EditBranchComponent implements OnInit {


  form: FormGroup;
  isEdit: boolean;
  branch: Branch;
  manufactureYearsToDrop: number[];

  constructor(private router: Router,
    private activeRouter: ActivatedRoute,
    private branchService: BranchService,
    private fb: FormBuilder) {
    this.isEdit = activeRouter.snapshot.fragment !== 'addnew';
  }

  async ngOnInit() {
    if (this.isEdit) {
      this.activeRouter.params.subscribe(x => {
        const cId = x['id'];
        this.branchService.getById(cId).then(result => {
          this.branch = result;
          this.setForm();
        });
      });
    } else {
      this.branch = new Branch();
      this.setForm();
    }
  }

  setForm() {
    this.form = this.fb.group({
        branchId: [this.branch.branchId],
        address: [this.branch.address, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
        latitude: [this.branch.latitude, Validators.compose([Validators.required, Validators.min(0), Validators.max(999999999999)])],
        longitude: [this.branch.longitude, Validators.compose([Validators.required, Validators.min(0), Validators.max(999999999999)])],
        branchName: [this.branch.branchName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])]
    });

  }

  onSubmit() {
    if (this.isEdit) {
      this.branchService.updateBranch(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'branches-list-management']);
      });
    } else {
      this.branchService.addNewBranch(this.form.value).then(() => {
        this.router.navigate(['/', 'admin', 'branches-list-management']);
      });
    }
  }

}
