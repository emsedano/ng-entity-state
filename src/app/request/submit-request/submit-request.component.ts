import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Request } from '../request.model';
@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent  {
  @Input() request: Request;
  @Output() requestSubmitted = new EventEmitter<Request>();

  constructor() { }

  submitRequest(): void {
    this.request.state = 'submitted';
    this.request.description = 'this request has been submitted by seller';
    this.requestSubmitted.emit(this.request);
  }

}
