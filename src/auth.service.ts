import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private _http:HttpClient) { }
  
  login(account:string = '', pass:string = '') {
    const infoUser = { username:account, password:pass };
    const headers = new HttpHeaders().set('Content-Type', 'application/json') ;

    return this._http.post('http://localhost:3200/login', JSON.stringify(infoUser), {headers:headers, responseType: 'text'});
  }
  
  outLogin() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
  }
}
