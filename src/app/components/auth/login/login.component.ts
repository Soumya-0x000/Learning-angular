import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    isPswdVisible: boolean = false;
    isSubmitting: boolean = false;
    focusField: { [key: string]: boolean } = {};
    isLottieLoading: boolean = true;

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    login() {
        console.log(this.loginForm.value);
    }

    togglePasswordVisibility() {
        this.isPswdVisible = !this.isPswdVisible;
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
