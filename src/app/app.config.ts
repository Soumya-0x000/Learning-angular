import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
    providers: [
        MessageService,
        provideRouter(routes),
        provideClientHydration(),
        importProvidersFrom(BrowserAnimationsModule),
        provideFirebaseApp(() =>
            initializeApp({
                projectId: 'codebin-b78c7',
                appId: '1:831184614550:web:20575820cc9b5781de3eb7',
                storageBucket: 'codebin-b78c7.appspot.com',
                apiKey: 'AIzaSyBfmX1TsKzyrKGi3QJGDIYm5IAIJG4RuTU',
                authDomain: 'codebin-b78c7.firebaseapp.com',
                messagingSenderId: '831184614550',
                measurementId: 'G-HV6PPFLJ73',
            })
        ),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
    ],
};
