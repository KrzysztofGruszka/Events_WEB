import { TestBed, inject } from '@angular/core/testing';

import { MyeventsService } from './myevents.service';

describe('MyeventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyeventsService]
    });
  });

  it('should be created', inject([MyeventsService], (service: MyeventsService) => {
    expect(service).toBeTruthy();
  }));
});
