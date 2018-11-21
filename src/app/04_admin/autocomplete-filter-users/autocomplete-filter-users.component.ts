import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { User } from '../../05_shared/models/user.model';
import { AutocompleteValue } from '../../05_shared/models/autocomplete-value.model';
import { Observable } from 'rxjs';
import { CustomerService } from '../../05_shared/services/customer.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-filter-users',
  templateUrl: './autocomplete-filter-users.component.html',
  styleUrls: ['./autocomplete-filter-users.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AutocompleteFilterUsersComponent,
    multi: true
  }]
})
export class AutocompleteFilterUsersComponent implements OnInit, ControlValueAccessor {

  onChange: Function;
  users: User[];
  selectedUserId: string;
  user = new FormControl();
  options: AutocompleteValue[] = [];
  filteredOptions: Observable<AutocompleteValue[]>;
  constructor(private customerService: CustomerService) { }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  writeValue(obj: any): void {
    this.selectedUserId = obj;
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
    if (this.users) {
      const itemToDisplay = this.users.find(x => x.UserId === item);
      return itemToDisplay ? `${itemToDisplay.userName}` : undefined;
    }
    return undefined;
  }

  ngOnInit() {
    this.customerService.getAll().then(result => {
      this.users = result;
    }).then(() => {
      for (let i = 0; i < this.users.length; i++) {
        const item: AutocompleteValue = {
          id: this.users[i].UserId,
          text: `${this.users[i].userName}`
        };
        this.options.push(item);
      }
    }).then(() => {
      console.log('this.options');
      console.log(this.options);
      this.filteredOptions = this.user.valueChanges
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
