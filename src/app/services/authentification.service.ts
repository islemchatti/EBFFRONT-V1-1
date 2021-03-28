import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Retraite } from '../models/retraite';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public path :String
  public util: any
  public result: any
  constructor(private _http:HttpClient) { }
  login(data): Observable<any>{
  console.log("service login works");
  return this._http.post('http://127.0.0.1:8000/api/login_check',data);
  }
  register(data1): Observable<any>{
    console.log("service register works");
    return this._http.post('http://127.0.0.1:8000/register',data1);
  }
  isLogged(){
      let token= localStorage.getItem("mytoken");
      if(!token){
        return false
      }
      else {
        return true
  
      }
  }
  getToken(){
    return localStorage.getItem("mytoken");
  }

  isLoggedAdmin(){
      let token= localStorage.getItem("mytoken");
      if(!token){
        return false
      }
      else {
        const helper= new JwtHelperService();
        const decodertoken =helper.decodeToken(token);
        if (decodertoken.roles=="ROLE_ADMIN") {
          return true;
        } else {
          return false;
        }
  
      }
  }
  
  isLoggedUser(){
      let token= localStorage.getItem("mytoken");
      if(!token){
        return false
      }
      else {
        const helper= new JwtHelperService();
        const decodertoken =helper.decodeToken(token);
        if (decodertoken.roles=="ROLE_USER") {
          return true;
        } else {
          return false;
        }
  
      }
  }
  getNomUser(){
    return this._http.get<any>('http://127.0.0.1:8000/api/users/nom');
  }
getIdUser(): Observable<Retraite>{
  return this._http.get<any>('http://127.0.0.1:8000/api/users/id');
}

}
