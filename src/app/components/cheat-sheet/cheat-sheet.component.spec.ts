import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheetComponent } from './cheat-sheet.component';
import { FormattingBarComponent } from '../formatting-bar/formatting-bar.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('CheatSheetComponent', () => {
    let component: CheatSheetComponent;
    let fixture: ComponentFixture<CheatSheetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheatSheetComponent, FormattingBarComponent],
            imports: [MaterialModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheatSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
