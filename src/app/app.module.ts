import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { UserProfileSavedComponent } from './user-profile-saved/user-profile-saved.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileFormComponent,
    UserProfileSavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
