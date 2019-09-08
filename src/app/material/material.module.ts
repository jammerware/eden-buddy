import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSliderModule,
} from '@angular/material';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
];

@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        ...MATERIAL_MODULES,
    ],
    exports: [
        BrowserAnimationsModule,
        ...MATERIAL_MODULES,
    ]
})
export class MaterialModule { }
