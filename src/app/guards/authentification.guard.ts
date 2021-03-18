import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(public authservice:AuthentificationService,private _router:Router) { } 
  canActivate(): boolean{
     if (this.authservice.loggedIn())
     {
       return true;
     }
     else 
     {
       this._router.navigate(['/register']);
       return false;
     }
  }
  
}
