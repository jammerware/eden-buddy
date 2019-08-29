import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { TimelineComponent } from './timeline.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CopyableCodeComponent } from '../copyable-code/copyable-code.component';
import { NotesPipe } from 'src/app/pipes/notes.pipe';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { LocationsPipe } from 'src/app/pipes/locations.pipe';

describe('TimelineComponent', () => {
    let activatedRoute = new ActivatedRouteStub();
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CopyableCodeComponent,
                TimelineComponent,
                LocationsPipe,
                NotesPipe,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                ClipboardModule,
                MaterialModule,
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRoute },
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub({ timelineId: "123" });
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
