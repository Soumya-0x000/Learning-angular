import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CodebinArrType } from '../../shared/models/codebinArrType';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'app-create-bin',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FloatLabelModule, InputTextModule],
    templateUrl: './create-bin.component.html',
    styleUrl: './create-bin.component.css',
})
export class CreateBinComponent {
    formFields: CodebinArrType[] = [];
    binForm!: FormGroup;
    @Output() saveCodeEmitter = new EventEmitter<FormGroup>();

    constructor(private homeComp: HomeComponent) {}

    ngOnInit(): void {
        this.formFields = [
            {
                name: 'title',
                label: 'Title',
                validators: [Validators.required, Validators.minLength(4)],
            },
            {
                name: 'language',
                label: 'Language',
                validators: [Validators.required, Validators.minLength(1)],
            },
            {
                name: 'description',
                label: 'Description',
                validators: [Validators.required, Validators.minLength(6)],
            },
            {
                name: 'code',
                label: 'Code',
                validators: [Validators.required, Validators.minLength(6)],
            },
        ];

        this.binForm = new FormGroup(
            this.formFields.reduce((form, field) => {
                form[field.name] = new FormControl('', field.validators);
                return form;
            }, {} as any)
        );
    }

    saveCode() {
        this.saveCodeEmitter.emit(this.binForm);
        this.homeComp.closeModal()
    }
}
