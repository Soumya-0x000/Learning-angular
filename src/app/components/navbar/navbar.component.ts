import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, TabViewModule, RouterLink, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    tabs: { title: string; path: string }[] = [];

    ngOnInit() {
        this.tabs = [
            { title: 'SignUp', path: '/signup' },
            { title: 'LogIn', path: '/login' },
        ];
    }
}
