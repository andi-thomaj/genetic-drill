import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../../shared/models/user-response-model';
import { SigninRequestModel } from '../../shared/models/signin-request-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private readonly apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = `https://localhost:5001/api/identity`
  }

  public signinOrRegister(id_token: SigninRequestModel): Observable<UserResponseModel> {
    return this.http.post<UserResponseModel>(`${this.apiUrl}/signin-google`, id_token)
  }
}


