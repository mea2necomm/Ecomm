import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HselectionComponent } from './hselection.component';

describe('HselectionComponent', () => {
  let component: HselectionComponent;
  let fixture: ComponentFixture<HselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
