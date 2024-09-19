import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { SignupFormType } from '../../shared/models/signupType';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    constructor(private router: Router) {}

    formFields: SignupFormType[] = [];
    signupForm!: FormGroup;

    ngOnInit(): void {
        this.formFields = [
            {
                name: 'name',
                type: 'text',
                label: 'Name',
                validators: [Validators.required, Validators.minLength(4)],
            },
            {
                name: 'email',
                type: 'email',
                label: 'Email',
                validators: [Validators.required, Validators.email],
            },
            {
                name: 'password',
                type: 'password',
                label: 'Password',
                validators: [Validators.required, Validators.minLength(6)],
            },
        ];

        this.signupForm = new FormGroup(
            this.formFields.reduce((form, field) => {
                form[field.name] = new FormControl('', field.validators);
                return form;
            }, {} as any)
        );
    }

    signup() {
        console.log(this.signupForm.value);
        this.router.navigate(['/login']);
    }
}
