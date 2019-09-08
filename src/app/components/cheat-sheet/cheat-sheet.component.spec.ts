import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { CheatSheetComponent } from './cheat-sheet.component';
import { FormattingBarComponent } from '../formatting-bar/formatting-bar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CheatSheetPhaseComponent } from '../cheat-sheet-phase/cheat-sheet-phase.component';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

describe('CheatSheetComponent', () => {
    let component: CheatSheetComponent;
    let fixture: ComponentFixture<CheatSheetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CheatSheetComponent,
                CheatSheetPhaseComponent,
                FormattingBarComponent
            ],
            imports: [MaterialModule],
            providers: [
                { provide: ActivatedRoute, useValue: new ActivatedRouteStub({ encounterId: "e1s" }) }
            ]
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
