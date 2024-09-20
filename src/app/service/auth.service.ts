import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router, private messageService: MessageService) {}

    registerUser(email: string, password: string) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Registration Successful',
                    detail: 'User registered successfully!',
                });
                this.router.navigate(['/login']);

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
            });
    }

    loginUser(email: string, password: string) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    }
}
