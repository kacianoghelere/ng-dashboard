/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutControlService } from './layout-control.service';

describe('LayoutControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutControlService]
    });
  });

  it('should ...', inject([LayoutControlService], (service: LayoutControlService) => {
    expect(service).toBeTruthy();
  }));
});
