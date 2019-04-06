import { TestBed } from '@angular/core/testing';

import { ServiceErrorMessageService } from './service-error-message.service';

describe('ServerErrorMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceErrorMessageService = TestBed.get(ServiceErrorMessageService);
    expect(service).toBeTruthy();
  });
});
