import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' }) // application/json
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/login';
  private signupUrl = 'http://localhost:8080/users';
  private UserUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    // return this.http.get<JwtResponse>(this.UserUrl, httpOptions);
  }

/*
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.get<string>(this.signupUrl, info, httpOptions);
  } */
}
