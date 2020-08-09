import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SignInResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  signIn(login: string, password: string): Observable<SignInResponse> {
    const url = environment.api + '/api/sign-in';
    return this.http.post<SignInResponse>(url, { login, password });
  }
}
