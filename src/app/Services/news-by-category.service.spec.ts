import { TestBed } from '@angular/core/testing';

import { NewsByCategoryService } from './news-by-category.service';

describe('NewsByCategoryService', () => {
  let service: NewsByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
