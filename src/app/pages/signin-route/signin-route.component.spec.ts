import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninRouteComponent } from './signin-route.component';

describe('SigninRouteComponent', () => {
  let component: SigninRouteComponent;
  let fixture: ComponentFixture<SigninRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninRouteComponent]
    });
    fixture = TestBed.createComponent(SigninRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
