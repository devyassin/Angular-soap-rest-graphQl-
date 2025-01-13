import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserLogin, UserRegister } from '../model/interface/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.API_OCR}/auth`;

  constructor(private http: HttpClient) {}

  register(data: UserRegister): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, data);
  }

  login(data: UserLogin): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/authenticate`,
      data
    );
  }
}
