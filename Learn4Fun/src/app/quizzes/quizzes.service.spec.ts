import { TestBed } from '@angular/core/testing';

import { QuizzesService } from './quizzes.service';

describe('QuizzesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzesService = TestBed.get(QuizzesService);
    expect(service).toBeTruthy();
  });
});
