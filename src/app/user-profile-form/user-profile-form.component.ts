import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserProfileData } from '../data/user-profile-data';
import { Observable } from 'rxjs';

import { FormloadService } from '../service/formload.service';
import { NgForm } from '@angular/forms';
import { SubmitdataService } from '../service/submitdata.service';

import { FormValidator } from '../validators/formvalidator';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnInit {

  // Creating the formData
  initialUserProfileData: UserProfileData = {
    firstName: 'Ramanuj',
    lastName: 'Srivastava',
    userEmail: 'r@ssb.com',
    address1: '22 Gas',
    address2: 'Apt 11',
    city: 'Weymouth',
    state: 'Massachusetts',
    zip: '02190',
    gender: 'Male',
    acceptTerms: true
  };

  private formValidator: FormValidator;

  userProfileData: UserProfileData = { ...this.initialUserProfileData };

  // list of all states
  stateList: Observable<string[]>;

  postError = false;
  postErrorMessage = '';

  constructor(
    private formloadService: FormloadService,
    private submitdataService: SubmitdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formValidator = new FormValidator();
  }

  ngOnInit() {
    this.stateList = this.formloadService.getStates();
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);

    if (form.valid) {

      const validatorResult = this.formValidator.validate(this.userProfileData);

      if ('SUCCESS' === validatorResult) {
        this.submitdataService.submitFormData(this.userProfileData).subscribe(
          (result) => {
            console.log('success: ', result);
            if (result === 'Success') {
              this.router.navigate(['/profilesaved']);
            } else {
              this.postError = true;
              this.postErrorMessage = 'There was an error saving your profile. Contact administrator.';
            }
          },
          function (error) {
            console.log('error: ', error);
          }
        );
      } else {
        // validation failed

        this.postError = true;
        this.postErrorMessage = 'There was an error validating the form. ' + validatorResult;

      }
      // let id = this.route.snapshot.paramMap.get('id');
    }
  }

}
