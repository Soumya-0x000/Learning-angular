import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
    isLottieLoading: boolean = true;

    constructor(private router: Router) {}

    navigateToHome() {
        this.router.navigate(['/']);
    }

    lottieLoaded() {
        this.isLottieLoading = false;
    }
}
