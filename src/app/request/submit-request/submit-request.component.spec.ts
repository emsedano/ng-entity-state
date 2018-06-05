import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRequestComponent } from './submit-request.component';

describe('SubmitRequestComponent', () => {
  let component: SubmitRequestComponent;
  let fixture: ComponentFixture<SubmitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
