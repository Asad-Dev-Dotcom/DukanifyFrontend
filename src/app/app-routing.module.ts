import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyEmailComponent } from './auth/Signup/verify-email/verify-email.component';
import { LogInComponent } from './auth/Login/log-in/log-in.component';

const routes: Routes = [
  {path:"",component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
