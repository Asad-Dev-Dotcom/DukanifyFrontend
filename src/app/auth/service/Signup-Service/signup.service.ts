import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthResponse } from '../../model/auth-response.model';
import { Observable } from 'rxjs';

export interface SignupPayload {
  name: string;       // ✅ Name added here
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
 
  register(payload: SignupPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, payload);
  }

  verifyOtp = (userId: string, otp: string) =>
    this.http.post(`${this.apiUrl}/verifyotp`, { userId, otp });

  resendOtp = (userId: string) =>
    this.http.post(`${this.apiUrl}/resendotp`, { userId });

  authenticateGoogleToken(token: string, action: 'signin' | 'signup'): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/google`,
      { token, action },
      { withCredentials: true }
    );
  }
}

