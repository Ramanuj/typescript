import { UserProfileData } from '../data/user-profile-data';

import { GlobalConstants } from '../common/appconstants';
import { Validation } from './Validation';

/// <reference path="./Validation.ts" />


export class FormValidator {

    constructor() { }

    validate(inputBean: UserProfileData): string {

        console.log('Validating profile for ' + inputBean.firstName);

        console.log('Validating input bean for zip code ' + inputBean.zip);
        if (!new Validation.ZipCodeValidator().isAcceptable(inputBean.zip)) {
            return 'The zip code passed is incorrect.';
        }

        console.log('Validating input bean for email passed ' + inputBean.userEmail);
        if (!new Validation.EmailValidator().isAcceptable(inputBean.userEmail)) {
            return 'The email passed is incorrect.';
        }

        // Global constants test
        if (GlobalConstants.Gender['Female'] === inputBean.gender) {
            console.log('Profile needs to be validated for a female user.');
        } else {
            console.log('Profile needs to be validated for a male user.');
        }

        return 'SUCCESS';
    }
}
