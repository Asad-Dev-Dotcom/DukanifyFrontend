import { Component, NgZone } from '@angular/core';
import { AuthResponse } from '../../model/auth-response.model';
import { SignupService } from '../../service/Signup-Service/signup.service';

declare const google: any;
@Component({
  selector: 'app-continue-with-google',
  templateUrl: './continue-with-google.component.html',
  styleUrls: ['./continue-with-google.component.scss']
})
export class ContinueWithGoogleComponent {

  constructor(private ngZone: NgZone, private authService: SignupService) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '516658923816-8o2kahm0t86eavcpad2l5a7jh6u4aklh.apps.googleusercontent.com',
      callback: (response: any) => this.handleGoogleResponse(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signup-btn'),
      { theme: 'outline', size: 'large', text: 'signup_with', width: 300 }
    );
  }

  handleGoogleResponse(response: any) {
    const token = response.credential;

    this.ngZone.run(() => {
      this.authService.authenticateGoogleToken(token, 'signup').subscribe({
        next: (res: AuthResponse) => {
          console.log('Signup successful', res);
        },
        error: err => {
          alert('Signup failed: ' + (err.error?.message || err.message));
        }
      });
    });
  }

}
