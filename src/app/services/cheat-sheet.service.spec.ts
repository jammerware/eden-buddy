import { TestBed } from '@angular/core/testing';

import { CheatSheetService } from './cheat-sheet.service';

describe('CheatSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheatSheetService = TestBed.get(CheatSheetService);
    expect(service).toBeTruthy();
  });
});
