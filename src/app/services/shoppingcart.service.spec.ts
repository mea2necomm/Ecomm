import { TestBed, inject } from '@angular/core/testing';

import { ShoppingcartService } from './shoppingcart.service';

describe('ShoppingcartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingcartService]
    });
  });

  it('should ...', inject([ShoppingcartService], (service: ShoppingcartService) => {
    expect(service).toBeTruthy();
  }));
});
