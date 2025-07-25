import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyLoginOTPComponent } from './verify-login-otp.component';

describe('VerifyLoginOTPComponent', () => {
  let component: VerifyLoginOTPComponent;
  let fixture: ComponentFixture<VerifyLoginOTPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyLoginOTPComponent]
    });
    fixture = TestBed.createComponent(VerifyLoginOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
