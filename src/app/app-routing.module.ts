import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyEmailComponent } from './auth/Signup/verify-email/verify-email.component';

import { LogInComponent } from './auth/Login/log-in/log-in.component';
import { LogInWithGoogleComponent } from './auth/Login/log-in-with-google/log-in-with-google.component';
import { ContinueWithGoogleComponent } from './auth/Signup/continue-with-google/continue-with-google.component';
import { ForgetPasswordComponent } from './auth/Login/forget-password/forget-password.component';
import { SignUpComponent } from './auth/Signup/sign-up/sign-up.component';
import { VerifyLoginOTPComponent } from './auth/Login/verify-login-otp/verify-login-otp.component';
import { ChangePasswordComponent } from './auth/Login/change-password/change-password.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : 'signup', component : SignUpComponent },
  { path : 'verifyEmail', component : VerifyEmailComponent },
  { path : 'login', component : LogInComponent },
  { path : 'verifyLoginEmail', component : VerifyLoginOTPComponent },
  { path : 'forgetPassword', component : ForgetPasswordComponent },
  { path : 'changePassword', component : ChangePasswordComponent },
  { path : '', component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
