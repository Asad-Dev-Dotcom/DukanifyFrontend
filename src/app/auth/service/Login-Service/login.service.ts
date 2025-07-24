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
    return this.http.post(`${this.apiUrl}/verifyloginOTP`, payload)
  }

  resendOTP(id : string){
    console.log('resend otp===', id)
    return this.http.post(`${this.apiUrl}/resendloginOTP`, { userId : id })
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(id: string, newPassword: string) {
  return this.http.post(`${this.apiUrl}/reset-password`, { id, newPassword });
}
}
