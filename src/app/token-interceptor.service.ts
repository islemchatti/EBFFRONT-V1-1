import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AuthentificationService } from 'src/app/services/authentification.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req, next){
    let authService=this.injector.get(AuthentificationService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization:  `Bearer ${authService.getToken()}`
      }
    }) 
    return next.handle(tokenizedReq);
  }
}
