import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricechangerComponent } from './pricechanger.component';

describe('PricechangerComponent', () => {
  let component: PricechangerComponent;
  let fixture: ComponentFixture<PricechangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricechangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricechangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
