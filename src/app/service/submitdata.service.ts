import { Injectable } from '@angular/core';
import { UserProfileData } from '../data/user-profile-data';
import { Observable, of } from 'rxjs';

import { UserProfileDao } from '../dao/userprofiledao';

@Injectable({
  providedIn: 'root'
})
export class SubmitdataService {

  private userProfileDao: UserProfileDao;

  constructor() {
    this.userProfileDao = new UserProfileDao();
  }

  submitFormData(userProfile: UserProfileData): Observable<any> {

    console.log('Submitted Successfully form');

    if (this.userProfileDao.saveUserProfile(userProfile)) {
      return of('Success');
    } else {
      return of('Error');
    }

  }
}

