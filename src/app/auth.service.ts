import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(credentials) {
    this.http.post<any>('http://localhost:45974/api/account',credentials)
    .subscribe(res=> {
      //console.log(res);
      localStorage.setItem('token',res);
    })
  }

}
