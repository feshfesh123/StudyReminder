import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly  apiUrl = 'https://studyreminderapi.azurewebsites.net'
  constructor(private http: HttpClient) { } 

  userAuthentication(username, password)
  {
    const body: User = {
      email: username,
      password: password
    }

    return this.http.post(this.apiUrl+ '/api/identity/login', body);
  }

  userRegistration(username, password)
  {
    const body: User = {
      email: username,
      password: password
    }

    return this.http.post(this.apiUrl+ '/api/identity/register', body);
  }
}
