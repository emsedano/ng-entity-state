import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Request } from '../request.model';
@Component({
  selector: 'app-send-to-client',
  templateUrl: './send-to-client.component.html',
  styleUrls: ['./send-to-client.component.css']
})
export class SendToClientComponent {

  @Input() request: Request;
  @Output() sendToClientEvent = new EventEmitter<Request>();

  constructor() { }

  approveAndSendToClient(): void {
    this.request.state = 'sentToClient';
    this.request.description = 'this request has approved by Manager and sent to client';
    this.sendToClientEvent.emit(this.request);
  }

  rejectRequest(): void {
    this.request.state = 'new';
    this.request.description = 'This request has rejected by manager, turned back to seller';
    this.sendToClientEvent.emit(this.request);
  }

}
