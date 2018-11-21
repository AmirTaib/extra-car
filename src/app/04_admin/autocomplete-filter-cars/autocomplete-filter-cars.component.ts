import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Car } from '../../05_shared/models/car.model';
import { AutocompleteValue } from '../../05_shared/models/autocomplete-value.model';
import { Observable } from 'rxjs';
import { CarService } from '../../05_shared/services/car.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-filter-cars',
  templateUrl: './autocomplete-filter-cars.component.html',
  styleUrls: ['./autocomplete-filter-cars.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AutocompleteFilterCarsComponent,
    multi: true
  }]
})
export class AutocompleteFilterCarsComponent implements OnInit, ControlValueAccessor {

  onChange: Function;
  cars: Car[];
  selectedCarId: string;
  car = new FormControl();
  options: AutocompleteValue[] = [];
  filteredOptions: Observable<AutocompleteValue[]>;
  constructor(private carService: CarService) { }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  writeValue(obj: any): void {
    this.selectedCarId = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  itemSelected(item: any) {
    this.onChange(item.option.value);
  }
  display(item) {
    return (x) => this.displayFn(x);
  }
  displayFn(item: number): string | undefined {
    if (this.cars) {
      const itemToDisplay = this.cars.find(x => x.carId === item);
      return itemToDisplay ? `${itemToDisplay.carNumber}` : undefined;
    }
    return undefined;
  }

  ngOnInit() {
    this.carService.getAll().then(result => {
      this.cars = result;
    }).then(() => {
      for (let i = 0; i < this.cars.length; i++) {
        const item: AutocompleteValue = {
          id: this.cars[i].carTypeId,
          text: `${this.cars[i].carNumber}`
        };
        this.options.push(item);
      }
    }).then(() => {
      console.log('this.options');
      console.log(this.options);
      this.filteredOptions = this.car.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): AutocompleteValue[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.text.toLowerCase().includes(filterValue));
  }


}
