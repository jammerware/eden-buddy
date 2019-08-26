import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyableCodeComponent } from './copyable-code.component';

describe('CopyableCodeComponent', () => {
  let component: CopyableCodeComponent;
  let fixture: ComponentFixture<CopyableCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyableCodeComponent ]
    })
    .compileComponents();
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
