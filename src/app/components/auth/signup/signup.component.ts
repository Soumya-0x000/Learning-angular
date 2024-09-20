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
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    constructor( private authServ: AuthService) {}

    formFields: SignupFormType[] = [];
    signupForm!: FormGroup;
    isPswdVisible: boolean = false;

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
        this.authServ.registerUser(
            this.signupForm.value.email,
            this.signupForm.value.password
        );
    }
}
