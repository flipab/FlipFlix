import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:4000/users";

  getUsers () : Observable<Users[]> {

    return this._httpClient.get<Users[]>(this.url);

  }
}
