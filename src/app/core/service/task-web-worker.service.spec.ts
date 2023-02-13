import { TestBed } from '@angular/core/testing';

import { TaskWebWorkerService } from './task-web-worker.service';

describe('TaskWebWorkerService', () => {
  let service: TaskWebWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskWebWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
