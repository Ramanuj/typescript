import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSavedComponent } from './user-profile-saved.component';

describe('UserProfileSavedComponent', () => {
  let component: UserProfileSavedComponent;
  let fixture: ComponentFixture<UserProfileSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
