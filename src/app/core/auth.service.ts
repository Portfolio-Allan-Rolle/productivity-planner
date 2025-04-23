import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

interface IFirebaseRegisterResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface IFirebaseSignInResponse {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
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
    // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.#http.post<IFirebaseRegisterResponse>(url, body);
  }

  login(
    email: string,
    password: string
  ): Observable<IFirebaseRegisterResponse> {
    // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.#http.post<IFirebaseRegisterResponse>(url, body);
  }

  save(
    email: string,
    userId: string,
    bearerToken: string
  ): Observable<unknown> {
    //const baseUrl = `https://firestore.googleapis.com/v1/projects/${environment.firebaseConfig.projectId}/databases/(default)/documents`;
    // const userFirestoreCollectionId = 'users';
    //const url = `${baseUrl}/${userFirestoreCollectionId}?key=${environment.firebaseConfig.apiKey}&documentId=${userId}`;
    // fix later
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=}`;
    const body = {
      fields: {
        email: { stringValue: email },
      },
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`,
    });
    const options = { headers };

    return this.#http.post<IFirebaseSignInResponse>(url, body, options);
  }
}
