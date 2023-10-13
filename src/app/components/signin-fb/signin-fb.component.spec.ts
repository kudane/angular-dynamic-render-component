import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFbComponent } from './signin-fb.component';

describe('SigninFbComponent', () => {
  let component: SigninFbComponent;
  let fixture: ComponentFixture<SigninFbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninFbComponent]
    });
    fixture = TestBed.createComponent(SigninFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
