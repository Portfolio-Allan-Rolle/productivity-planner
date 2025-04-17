import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { Observable } from 'rxjs';

interface IFirebaseRegisterResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #http = inject(HttpClient);

  register(
    email: string,
    password: string
  ): Observable<IFirebaseRegisterResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.#http.post<IFirebaseRegisterResponse>(url, body);
  }
}
