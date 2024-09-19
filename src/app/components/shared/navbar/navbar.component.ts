import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
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

    ngOnInit() {
        this.tabs = [
            { title: 'About', path: '/about' },
            { title: 'SignUp', path: '/signup' },
            { title: 'LogIn', path: '/login' },
        ];
    }
}
