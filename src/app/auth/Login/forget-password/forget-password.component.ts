import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../service/Login-Service/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private forgetpass: LoginService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email;

      this.forgetpass.forgotPassword(email)
        .subscribe({
          next: (res: any) => {
            this.forgotForm.reset()
            this.snackBar.open(res.message || 'Verification code sent to your email', 'Close', {
              duration: 3000
            });
          },
          error: (err) => {
            this.snackBar.open(err.error.message || 'Email not found', 'Close', {
              duration: 3000
            });
          }
        });
    } else {
      this.forgotForm.markAllAsTouched();
    }
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}


