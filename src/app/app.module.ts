import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { E1sComponent } from './components/e1s/e1s.component';
import { RolePickerComponent } from './components/role-picker/role-picker.component';

const materialModules = [
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
];

@NgModule({
    declarations: [
        AppComponent,
        E1sComponent,
        RolePickerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ...materialModules,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
