import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyableCodeComponent } from './components/copyable-code/copyable-code.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MaterialModule } from './material/material.module';
import { NotesPipe } from './pipes/notes.pipe';
import { LocationsPipe } from './pipes/locations.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CopyableCodeComponent,
        TimelineComponent,
        NotesPipe,
        LocationsPipe,
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
