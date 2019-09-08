import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheetPhaseComponent } from './cheat-sheet-phase.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('CheatSheetPhaseComponent', () => {
    let component: CheatSheetPhaseComponent;
    let fixture: ComponentFixture<CheatSheetPhaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheatSheetPhaseComponent],
            imports: [MaterialModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheatSheetPhaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
