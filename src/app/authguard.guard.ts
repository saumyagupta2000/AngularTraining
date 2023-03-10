import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthserviceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isUserLoggedIn()) {
      console.log('sdf', this.auth.isUserLoggedIn());
      //this.router.navigate(['/']);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
