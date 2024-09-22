import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { SignupFormType } from '../../shared/models/signupType';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    constructor(private authServ: AuthService) {}

    formFields: SignupFormType[] = [];
    signupForm!: FormGroup;
    isPswdVisible: boolean = false;
    isSubmitting: boolean = false;
    isPasswordVisible: boolean = false;
    isConfirmPasswordVisible: boolean = false;
    focusField: { [key: string]: boolean } = {};
    isLottieLoading: boolean = true;

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
                icon: 'password',
            },
            {
                name: 'confirmPassword',
                type: 'password',
                label: 'Confirm Password',
                validators: [Validators.required, Validators.minLength(6)],
                icon: 'confirmPassword',
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
        this.isSubmitting = true;
        this.authServ.registerUser(
            this.signupForm.value.email,
            this.signupForm.value.password
        );
    }

    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    toggleConfirmPasswordVisibility() {
        this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    }

    handleFocus(field: string) {
        this.focusField[field] = true;
    }

    handleBlur(field: string) {
        this.focusField[field] = false;
    }

    onLottieLoad() {
        this.isLottieLoading = false;
    }
}
