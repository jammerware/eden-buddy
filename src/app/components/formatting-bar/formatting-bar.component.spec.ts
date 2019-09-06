import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingBarComponent } from './formatting-bar.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('FormattingBarComponent', () => {
    let component: FormattingBarComponent;
    let fixture: ComponentFixture<FormattingBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormattingBarComponent],
            imports: [MaterialModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormattingBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
