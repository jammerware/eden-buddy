import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolePickerComponent } from './components/role-picker/role-picker.component';
import { CopyableCodeComponent } from './components/copyable-code/copyable-code.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        RolePickerComponent,
        CopyableCodeComponent,
        TimelineComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ClipboardModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
