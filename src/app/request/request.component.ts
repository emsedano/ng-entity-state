import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Request} from './request.model';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request: Request;
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.requestService.observableRequest.subscribe(this._updateRequest.bind(this));
  }

  _updateRequest(request) {
    console.log('updating request', request);
    this.request = request;
  }

  updateRequest(request: Request): void {
    this.requestService.changeRequest(request);
  }

  reset() {
    this.requestService.changeRequest({...this.request, state: 'new', description: 'This request has been initialized'});
  }

}
