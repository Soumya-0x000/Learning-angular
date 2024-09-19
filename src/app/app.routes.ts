import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./components/auth/login/login.component').then(
                (mod) => mod.LoginComponent
            ),
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'signup',
        loadComponent: () =>
            import('./components/auth/signup/signup.component').then(
                (mod) => mod.SignupComponent
            ),
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./components/pages/about-us/about-us.component').then(
                (mod) => mod.AboutUsComponent
            ),
    },
    {
        path: '404',
        loadComponent: () =>
            import('./components/shared/not-found/not-found.component').then(
                (mod) => mod.NotFoundComponent
            ),
    },
    { path: '**', redirectTo: '/404' },
];
