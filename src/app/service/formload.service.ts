import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserProfileDao } from '../dao/userprofiledao';

function checkLogin() {

  /** @type {boolean}*/
  let isLoggedIn: boolean = true;

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const method = descriptor.value;

    descriptor.value = function () {

      console.log('inside function ' + isLoggedIn);

      if (isLoggedIn) {
        return method.apply(this, arguments);
      } else {
        return null;
      }
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class FormloadService {

  private userProfileDao: UserProfileDao;

  constructor() { }

  @checkLogin()
  getStates(): Observable<string[]> {

    this.userProfileDao = new UserProfileDao();

    const listOfStates: Array<string> = this.userProfileDao.fetchAllStates();

    return of(listOfStates);
  }

}

