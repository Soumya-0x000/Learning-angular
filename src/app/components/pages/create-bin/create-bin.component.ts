import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-bin',
    standalone: true,
    imports: [],
    templateUrl: './create-bin.component.html',
    styleUrl: './create-bin.component.css',
})
export class CreateBinComponent {
    title = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);

    description = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);

    code = new FormControl('', [
        Validators.required,
    ]);

    binForm = new FormGroup({
        title: this.title,
        description: this.description,
        code: this.code,
    })
}
