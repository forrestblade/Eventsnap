import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // this.auth.getProfile(null);
      // console.log(this.auth.getProfile['http://localhost:4200/'])
      this.auth.isAdmin();
      console.log(this.auth.admin)
    if (this.auth.admin) {
      return true;
    }
    this.router.navigate(['/']);
    return false;

  }
}
