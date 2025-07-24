import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../service/Login-Service/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  resetForm!: FormGroup;
  showPassword = false;
  showConfirm = false;

  minLength = false;
  hasNumber = false;
  hasUpperLower = false;
  email: string = '';

  constructor(private fb: FormBuilder, private router: Router, private changepass: LoginService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    );

    this.resetForm.get('password')?.valueChanges.subscribe(value => {
      this.minLength = value.length >= 8;
      this.hasNumber = /\d/.test(value);
      this.hasUpperLower = /(?=.*[a-z])(?=.*[A-Z])/.test(value);
    });
  
  }


  get password() {
    return this.resetForm.get('password')
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  goBack() {
    this.router.navigate(['/forget-Pass'])
  }

  onSubmit() {
    if (this.resetForm.valid) {

      console.log('reset password====', this.email, this.password?.value)

      if (this.email) {
        this.changepass.resetPassword(this.email, this.password?.value).subscribe(
          (res : any) => {
            if (res.token) {
            localStorage.setItem('token', res.token);
          }
            this.snackBar.open('Password updated successfully', 'Close', {
              duration: 3000
            });
            this.router.navigate(['/landing-page']);
          },
          (err) => {
            this.snackBar.open('Error updating password', 'Close', {
              duration: 3000
            });
          }
        );
      }
    } else {
      this.resetForm.markAllAsTouched()
    }
  }
}
