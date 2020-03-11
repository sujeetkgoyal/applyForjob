import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../classes/user';
import { ApiResponse } from '../classes/api-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient) { }
  baseUrl = 'http://localhost/apply_for_job';

  login(loginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/adminLogin.php', loginData);
  }
}
