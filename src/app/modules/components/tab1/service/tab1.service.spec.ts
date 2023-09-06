import { TestBed } from '@angular/core/testing';

import { Tab1Service } from 'src/app/modules/components/tab1/service/tab1.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tab1Service = TestBed.get(Tab1Service);
    expect(service).toBeTruthy();
  });
});
