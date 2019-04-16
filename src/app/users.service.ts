import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:3000/users';

  getAll(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(this.url).toPromise().then(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });

  }

  saveData(user): Promise<any> {

    return new Promise<any>((resolve, reject) => {
      this.http.post(this.url, user).toPromise().then(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });

  }
}
