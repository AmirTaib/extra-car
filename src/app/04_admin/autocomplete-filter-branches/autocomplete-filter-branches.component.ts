import { Component, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { BranchService } from '../../05_shared/services/branch.service';
import { Branch } from '../../05_shared/models/branch.model';
import { AutocompleteValue } from '../../05_shared/models/autocomplete-value.model';

@Component({
  selector: 'app-autocomplete-filter-branches',
  templateUrl: './autocomplete-filter-branches.component.html',
  styleUrls: ['./autocomplete-filter-branches.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AutocompleteFilterBranchesComponent,
    multi: true
  }]
})
export class AutocompleteFilterBranchesComponent implements OnInit, ControlValueAccessor {

  onChange: Function;
  branches: Branch[];
  selectedBranchId: string;
  branch = new FormControl();
  options: AutocompleteValue[] = [];
  filteredOptions: Observable<AutocompleteValue[]>;
  constructor(private branchService: BranchService) { }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  writeValue(obj: any): void {
    this.selectedBranchId = obj;
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
    if (this.branches) {
      const itemToDisplay = this.branches.find(x => x.branchId === item);
      return itemToDisplay ? `${itemToDisplay.branchName}, ${itemToDisplay.address}` : undefined;
    }
    return undefined;
  }

  ngOnInit() {
    this.branchService.getAllBranches().then(result => {
      this.branches = result;
    }).then(() => {
      for (let i = 0; i < this.branches.length; i++) {
        const item: AutocompleteValue = {
          id: this.branches[i].branchId,
          text: `${this.branches[i].branchName}, ${this.branches[i].address}`
        };
        this.options.push(item);
      }
    }).then(() => {
      console.log('this.options');
      console.log(this.options);
      this.filteredOptions = this.branch.valueChanges
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
