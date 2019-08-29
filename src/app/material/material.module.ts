import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
} from '@angular/material';


const MATERIAL_MODULES = [
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
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
