import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';
const AUTHORITIES_KEY = "AuthAuthorities";


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<string> = [];

  constructor() { }

  public signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(email: string) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, email);
  }

  public getUsername(): string {
    return window.sessionStorage.getItem(USER_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if(sessionStorage.getItem(TOKEN_KEY)) {
      //JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach( authority => {
        this.roles.push(sessionStorage.getItem(AUTHORITIES_KEY));
      //});
    }
    return this.roles;
  }
}
