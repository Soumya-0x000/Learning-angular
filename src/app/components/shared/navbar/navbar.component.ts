import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { navbarType } from '../models/navbarType';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, TabViewModule, RouterLink, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    tabs: navbarType[] = [];

    constructor(private route: Router) {}

    ngOnInit() {
        this.tabs = [
            { title: 'Home', path: '/home', icon: 'pi pi-home' },
            { title: 'SignUp', path: '/signup', icon: 'pi pi-user-plus' },
            { title: 'LogIn', path: '/login', icon: 'pi pi-sign-in' },
        ];
    }

    activeRoute(path: string): boolean {
        return this.route.url === path;
    }
}
