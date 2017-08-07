import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetrequestComponent } from './resetrequest.component';

describe('ResetrequestComponent', () => {
  let component: ResetrequestComponent;
  let fixture: ComponentFixture<ResetrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
