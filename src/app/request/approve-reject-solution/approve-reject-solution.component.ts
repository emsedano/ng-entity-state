import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Request } from '../request.model';
@Component({
  selector: 'app-approve-reject-solution',
  templateUrl: './approve-reject-solution.component.html',
  styleUrls: ['./approve-reject-solution.component.css']
})
export class ApproveRejectSolutionComponent {

  @Input() request: Request;
  @Output() clientApprovalEvent = new EventEmitter<Request>();

  constructor() { }

  approveSolution(): void {
    this.request.state = 'approved';
    this.request.description = 'this request has approved by Client, CONGRATULATIONS!!!';
    this.clientApprovalEvent.emit(this.request);
  }

  rejectSolution(): void {
    this.request.state = 'submitted';
    this.request.description = 'This request has rejected by client, turned back to manager';
    this.clientApprovalEvent.emit(this.request);
  }

}
