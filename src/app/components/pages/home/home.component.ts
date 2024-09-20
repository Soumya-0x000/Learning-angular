import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CreateBinComponent } from "../create-bin/create-bin.component";
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [DialogModule, ButtonModule, InputTextModule, CreateBinComponent],
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

    saveEmittedCode(e: FormGroup) {
        console.log(e)
    }
}
