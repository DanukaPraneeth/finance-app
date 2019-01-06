import { TestBed } from '@angular/core/testing';

import { ApprovalRemoteService } from './approval-remote.service';

describe('ApprovalRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovalRemoteService = TestBed.get(ApprovalRemoteService);
    expect(service).toBeTruthy();
  });
});
