import { ValidatorFn, AbstractControl } from '@angular/forms';

export function PasswordRepeatValidator(compareParam = null): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any} => {
    return;
  };
}
