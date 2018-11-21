import { Injectable } from '@angular/core';
import { Branch } from '../models/branch.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  branchesList: Branch[] = [
    {
      'branchId': 1,
      'address': 'Hertzel 51, Tel Aviv',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Tel Aviv',
    },
    {
      'branchId': 2,
      'address': 'Hertzel 52, Haifa',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Haifa',
    },
    {
      'branchId': 3,
      'address': 'Hertzel 53, Jerusalem',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Jerusalem',
    }, {
      'branchId': 4,
      'address': 'Hertzel 54, Holon',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Holon',
    }, {
      'branchId': 5,
      'address': 'Hertzel 55, Ariel',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Ariel',
    }, {
      'branchId': 6,
      'address': 'Hertzel 56, Beer Sheva',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Beer Sheva',
    }, {
      'branchId': 7,
      'address': 'Hertzel 57, Eilat',
      'latitude': 123456789,
      'longitude': 987654321,
      'branchName': 'Eilat',
    }
  ];

  constructor() { }


  getAllBranches(): Promise<Branch[]> {
    return new Promise<Branch[]>((res, rej) => {

      res(this.branchesList);
    });
  }

  getById(id): Promise<Branch> {
    return new Promise<Branch>((res, rej) => {
      const branch: Branch = {
        'branchId': 2,
        'address': 'Hertzel 51, Tel Aviv',
        'latitude': 123456789,
        'longitude': 987654321,
        'branchName': 'Tel Aviv branch',
      };
      res(branch);
    });
  }

  updateBranch(branch): Promise<Branch> {
    return new Promise<Branch>((res, rej) => {
      res(branch);
    });
  }

  addNewBranch(newBranch): Promise<Branch> {
    return new Promise<Branch>((res, rej) => {
      this.branchesList.push(newBranch);
      res(newBranch);
    });
  }

  deleteBranch(id: string): Observable<boolean> {
    return of(true);
  }



}

