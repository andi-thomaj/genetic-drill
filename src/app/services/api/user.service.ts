import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../../shared/models/user-response-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = `https://localhost:5001/api/users`;
   }

   public getUserByEmail(email: string): Observable<UserResponseModel>{
    return this.http.get<UserResponseModel>(`${this.apiUrl}?email=${email}`);
   }
}
