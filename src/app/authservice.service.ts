import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  fakeusername = 'test@gmail.com';
  fakepassword = 'test';

  constructor() {}

  login(email: any, password: any) {
    if (email == this.fakeusername && password == this.fakepassword) {
      localStorage.setItem('token', '1234567890');
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }
}
