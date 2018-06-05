import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectSolutionComponent } from './approve-reject-solution.component';

describe('ApproveRejectSolutionComponent', () => {
  let component: ApproveRejectSolutionComponent;
  let fixture: ComponentFixture<ApproveRejectSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRejectSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRejectSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
