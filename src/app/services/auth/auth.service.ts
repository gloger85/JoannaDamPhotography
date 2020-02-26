import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthLoginInfo } from 'src/app/login/authorization/login-info';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/login/authorization/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  attemptLogin(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
   // return this.http.get<JwtResponse>('http://localhost:8080/user', httpOptions);
  }
}
