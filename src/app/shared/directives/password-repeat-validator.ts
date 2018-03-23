import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export function PasswordRepeatValidator(compareParam = null): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (typeof control.parent !== typeof undefined && control.touched) {
      const password = control.parent.get('password').value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        control.setErrors( {MismatchPassword: true} );
      } else {
        return null;
      }
    }
  };
}
