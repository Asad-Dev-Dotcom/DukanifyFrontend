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



@NgModule({
  declarations: [
    LogInComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    LogInWithGoogleComponent,
    SignUpComponent,
    ContinueWithGoogleComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, NgOtpInputModule, MatSnackBarModule
  ]
})
export class AuthModule { }
