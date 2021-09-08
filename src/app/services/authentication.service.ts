import { environment } from './../../environments/environment';
import { JwtResponse } from './../model/JwtResponse';
import { JwtRequest } from './../model/JwtRequest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(request: JwtRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(environment.baseUrl + 'api/authenticate', request);
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }


  logOut(): void {
    sessionStorage.removeItem('username');
  }

}
