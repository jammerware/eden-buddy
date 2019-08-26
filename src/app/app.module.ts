import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
} from '@angular/material';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { E1sComponent } from './components/e1s/e1s.component';
import { RolePickerComponent } from './components/role-picker/role-picker.component';
import { CopyableCodeComponent } from './components/copyable-code/copyable-code.component';

const materialModules = [
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
];

@NgModule({
    declarations: [
        AppComponent,
        E1sComponent,
        RolePickerComponent,
        CopyableCodeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ClipboardModule,
        ...materialModules,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
