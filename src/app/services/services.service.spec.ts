import { TestBed } from '@angular/core/testing';

import { PubsubService } from './pub-sub.service';

describe('PubsubService', () => {
  let service: PubsubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubsubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
