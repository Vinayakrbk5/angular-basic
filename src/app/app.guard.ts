import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private _router:Router)
  {
    console.log("Created AppGuard");
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem('name'))
    {
      // this._router.navigate(['home']);
      return true; 
    }
    else
    {
      this._router.navigate(['sinein']);
      return false;
    }
  }
  
}
