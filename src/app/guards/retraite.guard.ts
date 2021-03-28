import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';
import { RetraiteService } from '../services/retraite.service';

@Injectable({
  providedIn: 'root'
})
export class RetraiteGuard implements CanActivateChild {
  constructor( private _router: Router, private authservice : AuthentificationService){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.isLoggedUser()   )
      {
        return true;
      
      }
      else{
        this._router.navigateByUrl('/register');
        return false;
      }
  }
  
}
