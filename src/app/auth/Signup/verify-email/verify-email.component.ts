import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../service/Signup-Service/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
 otpForm: FormGroup;
  error: string | null = null;
  loading = false;
  userId : string = JSON.parse(localStorage.getItem('id') || '')

  constructor(
    private fb: FormBuilder,
    private authService: SignupService,
    private router: Router,
    private snackBar : MatSnackBar
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (!state?.['userId']) {
      // this.router.navigate(['/auth/register']);
      console.log('Register route!')
    }
    // this.userId = state?.['userId'];

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  onSubmit() {

    if (this.otpForm.valid) {
      this.loading = true;
      this.error = null;

      const { otp } = this.otpForm.value;
      console.log('userid', this.userId)
      this.authService.verifyOtp(this.userId, otp).subscribe({
        next: () => {
          this.loading = false;
          this.snackBar.open('OTP Verify Successfull', 'Close', { duration : 3000 })
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          this.loading = false;
          this.error = err.error.message || 'OTP verification failed';
          this.snackBar.open('OTP Verify Failed', 'Close', { duration : 3000 })
        }
      });
    }
  }

  resendOtp() {
    console.log('resenf dodododo')

      this.loading = true;

      console.log('in resend otp condition')
      // this.error = null;

      this.authService.resendOtp(this.userId).subscribe({
        next: (res) => {
          this.snackBar.open('OTP Resend Successfull', 'Close', { duration : 3000 })
          this.loading = false;

        },
        error: (err: any) => {
          this.loading = false;
          // this.error = err.error.message || 'Failed to resend OTP';
          this.snackBar.open('OTP Resend Failed', 'Close', { duration : 3000 })
        }
      });

  }

  allowOnlyDigits(event: KeyboardEvent): void {
  const charCode = event.key.charCodeAt(0);
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}

}
