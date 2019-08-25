import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1sComponent } from './e1s.component';

describe('E1sComponent', () => {
    let component: E1sComponent;
    let fixture: ComponentFixture<E1sComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [E1sComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(E1sComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
