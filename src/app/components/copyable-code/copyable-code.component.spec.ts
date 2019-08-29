import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyableCodeComponent } from './copyable-code.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MaterialModule } from 'src/app/material/material.module';

describe('CopyableCodeComponent', () => {
    let component: CopyableCodeComponent;
    let fixture: ComponentFixture<CopyableCodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CopyableCodeComponent],
            imports: [
                ClipboardModule,
                MaterialModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CopyableCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
