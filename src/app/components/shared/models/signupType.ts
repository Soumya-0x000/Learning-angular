import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface SignupFormType {
    name: string;
    type: string;
    label: string;
    validators: ((control: AbstractControl) => ValidationErrors | null)[];
    icon?: string;
}
