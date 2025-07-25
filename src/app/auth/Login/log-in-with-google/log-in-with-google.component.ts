import { Component, NgZone } from '@angular/core';
import { AuthResponse } from '../../model/auth-response.model';
import { SignupService } from '../../service/Signup-Service/signup.service';
import { Router } from '@angular/router';

declare const google: any;
@Component({
  selector: 'app-log-in-with-google',
  templateUrl: './log-in-with-google.component.html',
  styleUrls: ['./log-in-with-google.component.scss']
})
export class LogInWithGoogleComponent {

   constructor(private ngZone: NgZone, private authService: SignupService, private router: Router) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '516658923816-8o2kahm0t86eavcpad2l5a7jh6u4aklh.apps.googleusercontent.com',
      callback: (response: any) => this.handleGoogleResponse(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-login-btn'),
      { theme: 'outline', size: 'large', text: 'signin_with', width: 300 }
    );
  }

  handleGoogleResponse(response: any) {
    const token = response.credential;

    this.ngZone.run(() => {
      this.authService.authenticateGoogleToken(token, 'signin').subscribe({
        next: (res: AuthResponse) => {
          console.log('Login successful', res);
          this.router.navigate(['/'])
        },
        error: err => {
          alert('Login failed: ' + (err.error?.message || err.message));
        }
      });
    });
  }

}
