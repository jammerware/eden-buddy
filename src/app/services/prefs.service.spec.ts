import { TestBed } from '@angular/core/testing';

import { PrefsService } from './prefs.service';

describe('PrefsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrefsService = TestBed.get(PrefsService);
    expect(service).toBeTruthy();
  });
});
