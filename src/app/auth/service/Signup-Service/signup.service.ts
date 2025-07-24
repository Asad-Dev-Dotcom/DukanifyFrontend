import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  
  register(payload:any)  {
    return this.http.post(`${this.apiUrl}/signup`, payload);
}



}
