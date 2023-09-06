import {inject, TestBed} from '@angular/core/testing';

import {AuthGuard} from 'src/app/core/guards/auth/guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
