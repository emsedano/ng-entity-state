import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Request } from '../request/request.model';

@Injectable()
export class RequestService {
  // Share this object through the components.
  private request = new BehaviorSubject<Request>(new Request('My request', 'This request has been initialized'));
  observableRequest = this.request.asObservable();

  constructor() {
    if (localStorage.getItem('request')) {
      this.request.next(JSON.parse(localStorage.getItem('request')));
    }
  }

  changeRequest(request: Request) {
    console.log('next', request);
    localStorage.setItem('request', JSON.stringify(request));
    this.request.next(request);
  }
}
