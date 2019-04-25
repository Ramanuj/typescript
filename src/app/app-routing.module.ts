import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileSavedComponent } from '../app/user-profile-saved/user-profile-saved.component';
import { UserProfileFormComponent } from '../app/user-profile-form/user-profile-form.component';

const routes: Routes = [
  { path: 'register', component: UserProfileFormComponent },
  { path: 'profilesaved', component: UserProfileSavedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
