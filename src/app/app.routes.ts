import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./components/auth/login/login.component').then(
                (mod) => mod.LoginComponent
            ),
    },
    {
        path: 'signup',
        loadComponent: () =>
            import('./components/auth/signup/signup.component').then(
                (mod) => mod.SignupComponent
            ),
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./components/pages/home/home.component').then(
                (mod) => mod.HomeComponent
            ),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '404',
        loadComponent: () =>
            import('./components/shared/not-found/not-found.component').then(
                (mod) => mod.NotFoundComponent
            ),
    },
    { path: '**', redirectTo: '/404' },
];
