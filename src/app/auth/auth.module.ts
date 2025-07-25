import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './Login/log-in/log-in.component';
import { VerifyEmailComponent } from './Signup/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './Login/forget-password/forget-password.component';
import { ChangePasswordComponent } from './Login/change-password/change-password.component';
import { LogInWithGoogleComponent } from './Login/log-in-with-google/log-in-with-google.component';
import { SignUpComponent } from './Signup/sign-up/sign-up.component';
import { ContinueWithGoogleComponent } from './Signup/continue-with-google/continue-with-google.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SocialAuthService, SocialAuthServiceConfig, } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { VerifyLoginOTPComponent } from './Login/verify-login-otp/verify-login-otp.component';



@NgModule({
  declarations: [
    LogInComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    LogInWithGoogleComponent,
    SignUpComponent,
    ContinueWithGoogleComponent,
    VerifyLoginOTPComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, NgOtpInputModule, MatSnackBarModule
  ],
  exports: [ 
    LogInWithGoogleComponent
  ],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('516658923816-8o2kahm0t86eavcpad2l5a7jh6u4aklh.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ]
})
export class AuthModule { }
