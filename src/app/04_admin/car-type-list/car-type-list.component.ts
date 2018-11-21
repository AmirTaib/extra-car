import { Component, OnInit } from '@angular/core';
import { CarType } from '../../05_shared/models/car-type.model';
import { CarTypeService } from '../../05_shared/services/car-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-type-list',
  templateUrl: './car-type-list.component.html',
  styleUrls: ['./car-type-list.component.scss']
})
export class CarTypeListComponent implements OnInit {

  types: CarType[];
  temp: CarType[];

  constructor(private carTypeService: CarTypeService, private router: Router) {}

  ngOnInit() {
    this.carTypeService.getAll().then(result => {
      this.types = this.carTypeService.carTypeList;
      this.temp = this.types;
    });
  }

  updateFilter(event) {
    console.log('in a func');
    this.temp = this.types;
    let filterTypes;
    const val = event.target.value.toString();
    filterTypes = this.temp.filter((d: CarType) => {
      return d.carTypeId.toString().indexOf(val) !== -1;
    });
    this.temp = filterTypes;
  }

  deleteCar(ev: MouseEvent, id) {
    ev.stopPropagation();
    this.carTypeService.deleteCarType(id).subscribe((x) => {
      const carToDeleteIndex = this.types.findIndex(o => o.carTypeId === id);
      this.types.splice(carToDeleteIndex, 1);
    });
  }

  itemClicked(item) {
    if (item.type === 'click') {
      const clickItem: CarType = item.row;
      this.router.navigate(['/', 'admin', 'edit-car-type', clickItem.carTypeId]);
    }
  }


  addNewCar() {
    this.router.navigate(['/', 'admin', 'add-car-type'], { fragment: 'addnew' });
  }

}
