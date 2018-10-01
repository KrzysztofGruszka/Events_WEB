import { TestBed, inject } from '@angular/core/testing';

import { MyfriendsService } from './myfriends.service';

describe('MyfriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyfriendsService]
    });
  });

  it('should be created', inject([MyfriendsService], (service: MyfriendsService) => {
    expect(service).toBeTruthy();
  }));
});
