import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { SignupService } from '../../service/Signup-Service/signup.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: SignupService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.signupForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]], // ✅ Name added here
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      { validators: passwordMatchValidator }
    );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  register(): void {
    if (this.signupForm.valid) {
      console.log('form data=====', this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe({
        next: (res: any) => {
          this.snackBar.open('Signup Successful', 'Close', { duration: 3000 });
          this.signupForm.reset();
          this.showPassword = false;
          this.showConfirmPassword = false;
          localStorage.setItem('id', JSON.stringify(res.userId));
          this.router.navigate(['/verifyEmail']);
        },
        error: (err) =>
          this.snackBar.open('Signup Failed', 'Close', { duration: 3000 })
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
};
