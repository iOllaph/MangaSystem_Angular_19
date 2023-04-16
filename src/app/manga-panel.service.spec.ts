import { TestBed } from '@angular/core/testing';

import { MangaPanelService } from './manga-panel.service';

describe('MangaPanelService', () => {
  let service: MangaPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
