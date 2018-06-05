import { Injectable } from '@angular/core';
import { User } from '../user/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject} from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  // Share this object through all the components.
  // Initially user will be a SELLER, but can be changed as you select in user component
  private _user = new ReplaySubject<User>(1);

  constructor() {
    let user;
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));
    } else {
      user = { name: 'Elias', roles: ['SELLER']};
    }
    this._user.next(<User>user);
  }

  changeRoles(roles: string[]): void {
    const nextUser: User = {name: 'Elias', roles };
    localStorage.setItem('user', JSON.stringify(nextUser));
    window.location.reload();
  }

  getUser(): Observable<User> {
    return this._user.asObservable();
  }

}
