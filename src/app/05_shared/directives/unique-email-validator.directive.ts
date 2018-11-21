import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { map } from 'rxjs/operators';

export function uniqueEmailValidator(customerService: CustomerService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return customerService.getUserByEmail(c.value).pipe(
      map(users => {
        console.log(users);
        return users && users.length > 0 ? { 'uniqueEmail': true } : null;
      })
    );
  };
}
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[uniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.customerService.getUserByEmail(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueEmail': true } : null;
      })
    );
  }

  constructor(private customerService: CustomerService) { }

}
