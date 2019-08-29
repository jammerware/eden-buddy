import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';

import { TimelineComponent } from './timeline.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { RolePickerComponent } from '../role-picker/role-picker.component';
import { CopyableCodeComponent } from '../copyable-code/copyable-code.component';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('TimelineComponent', () => {
    let activatedRoute = new ActivatedRouteStub();
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CopyableCodeComponent,
                RolePickerComponent,
                TimelineComponent
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
        activatedRoute.setParamMap({ timelineId: "123" });
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
