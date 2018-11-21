import { Component, OnInit, Input } from '@angular/core';
import { CarType } from '../../05_shared/models/car-type.model';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarTypeService } from '../../05_shared/services/car-type.service';
import { startWith, map } from 'rxjs/operators';
import { AutocompleteValue } from '../../05_shared/models/autocomplete-value.model';

@Component({
  selector: 'app-autocomplete-filter-car-type',
  templateUrl: './autocomplete-filter-car-type.component.html',
  styleUrls: ['./autocomplete-filter-car-type.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AutocompleteFilterCarTypeComponent,
    multi: true
  }]
})
export class AutocompleteFilterCarTypeComponent implements OnInit, ControlValueAccessor {

  onChange: Function;
  carTypes: CarType[];
  selectedCarTypeId: string;
  carType = new FormControl();
  options: AutocompleteValue[] = [];
  filteredOptions: Observable<AutocompleteValue[]>;
  constructor(private carTypeService: CarTypeService) { }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  writeValue(obj: any): void {
    this.selectedCarTypeId = obj;
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
    if (this.carTypes) {
      const itemToDisplay = this.carTypes.find(x => x.carTypeId === item);
      return itemToDisplay ? `${itemToDisplay.manufacturerName}, ${itemToDisplay.model}, ${itemToDisplay.manufactureYear}` : undefined;
    }
    return undefined;
  }

  ngOnInit() {
    this.carTypeService.getAll().then(result => {
      this.carTypes = result;
    }).then(() => {
      for (let i = 0; i < this.carTypes.length; i++) {
        const item: AutocompleteValue = {
          id: this.carTypes[i].carTypeId,
          text: `${this.carTypes[i].manufacturerName}, ${this.carTypes[i].model}, ${this.carTypes[i].manufactureYear}`
        };
        this.options.push(item);
      }
    }).then(() => {
      console.log('this.options');
      console.log(this.options);
      this.filteredOptions = this.carType.valueChanges
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
