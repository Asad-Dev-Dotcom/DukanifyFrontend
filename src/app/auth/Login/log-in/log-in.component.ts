import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../service/Login-Service/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  loginForm!: FormGroup;
  showPassword: Boolean = false;

  constructor(private fb: FormBuilder , private authService: LoginService , private router: Router, private snackBar : MatSnackBar) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value
      const password = this.loginForm.get('password')?.value
      this.authService.loginUser(email, password).subscribe({
        next: (res: any) => {
          this.snackBar.open('Login SuccessFull', 'Close', { duration : 3000 })
          if (res.token) {
            localStorage.setItem('token', JSON.stringify(res.token))
            this.router.navigate(['landingpage']);
          }
        },
        error: (err: any) => {
          this.snackBar.open('Login Failed', 'Close', { duration : 3000 })
          
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
