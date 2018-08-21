import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RequestService {

  baseUrl = 'http://pseudofilmwebapi.azurewebsites.net';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private _http: HttpClient) { }

  addUser(data) {
    return this._http.post(this.baseUrl + '/adduser', data, {headers: this.headers})
      .pipe(
        map((response: Response) => response)
      );
  }

  getUser(data) {
    return this._http.post(this.baseUrl + '/getuser', data, {headers: this.headers})
      .pipe(
        map((response: Response) => response)
      );
  }

  getallData() {
    return this._http.get(this.baseUrl + '/getalldata', {headers: this.headers})
      .pipe(
        map((response: Response) => response)
      );
  }
  searchData(strparam) {
    return this._http.get(this.baseUrl + '/search', {headers: this.headers})
      .pipe(
        map((response: Response) => response)
      );
  }
}