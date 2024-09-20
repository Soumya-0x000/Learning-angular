import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { firebaseConfig } from '../environment/firbaseConfig';
import { initializeApp } from 'firebase/app';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    showNavbar: boolean = true;

    constructor(private router: Router) {
        initializeApp(firebaseConfig);
    }

    ngOnInit() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                this.showNavbar = event?.urlAfterRedirects !== '/404';
            });
    }
}
