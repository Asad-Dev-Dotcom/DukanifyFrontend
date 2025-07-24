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
    return this.http.post(`${this.apiUrl}/auth/login`, payload)
  }
}
