import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:3000/users';

  getAll(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }

  saveData(user): Promise<any> {
    return this.http.post(this.url, user).toPromise();
  }
}
