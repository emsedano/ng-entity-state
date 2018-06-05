import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class PermissionsService {
  private readonly WORKFLOW_EVENTS = Object.freeze(environment['workflow']);
  private userRoles: Set<string>;

  constructor(private userService: UserService) {
  }

  public checkAuthorization(path: any): Observable<boolean> {
    if (!this.userRoles) {
      return this.userService.getUser()
        .do(user => this.userRoles = new Set(user.roles))
        .map(() => this.doCheckAuthorization(path));
    }
    return Observable.of(this.doCheckAuthorization(path));
  }

  private doCheckAuthorization(path: any): boolean {
    const keys = this.parsePath(path);
    if (keys.length) {
      const entry = this.findEntry(this.WORKFLOW_EVENTS, keys);
      if (entry && entry['permittedRoles'] && this.userRoles.size) {
        return entry.permittedRoles.some(permittedRole => this.userRoles.has(permittedRole));
      }
    }
    return false;
  }

  private parsePath(path: any): string[] {
    if (typeof path === 'string') {
      return path.split('.');
    }
    if (Array.isArray(path)) {
      return path;
    }
    return [];
  }

  private findEntry(currentObject: any, keys: string[], index = 0) {
    const key = keys[index];
    if (currentObject[key] && index < keys.length - 1) {
      return this.findEntry(currentObject[key], keys, index + 1);
    } else if (currentObject[key] && index === keys.length - 1) {
      return currentObject[key];
    } else {
      return false;
    }
  }

}
