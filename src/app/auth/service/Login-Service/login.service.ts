import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  loginUser(email : string, password : string){
    const payload = { email, password }
    console.log('payload in login user', payload)
    return this.http.post(`${this.apiUrl}/login`, payload)
  }


    verifyOTP(id : any, otp : string){
    const payload = { id, otp }
    return this.http.post(`${this.apiUrl}/verifyOTP`, payload)
  }

  resendOTP(id : string){
    console.log('resend otp===', id)
    return this.http.post(`${this.apiUrl}/resendOTP`, { userId : id })
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.apiUrl}/users/forgot-password`, { email });
  }

  resetPassword(email: string, newPassword: string) {
  return this.http.post(`${this.apiUrl}/users/reset-password`, { email, newPassword });
}
}
