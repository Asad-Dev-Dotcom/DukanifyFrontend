import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyEmailComponent } from './auth/Signup/verify-email/verify-email.component';
import { LogInWithGoogleComponent } from './auth/Login/log-in-with-google/log-in-with-google.component';
import { ContinueWithGoogleComponent } from './auth/Signup/continue-with-google/continue-with-google.component';

const routes: Routes = [
  {path:"",component:LogInWithGoogleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
