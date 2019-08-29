import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RolePickerComponent } from './role-picker.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('RolePickerComponent', () => {
    let component: RolePickerComponent;
    let fixture: ComponentFixture<RolePickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RolePickerComponent],
            imports: [
                FormsModule,
                MaterialModule
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RolePickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
