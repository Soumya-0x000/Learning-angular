import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [DialogModule, ButtonModule, InputTextModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    isCodebinOpen: boolean = false;

    openModal() {
        this.isCodebinOpen = true;
    }

    closeModal() {
        this.isCodebinOpen = false;
    }
}
