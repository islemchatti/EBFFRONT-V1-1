import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public path :String
  constructor(private _http:HttpClient) { }
  login(data): Observable<any>{
  console.log("service login works");
  return this._http.post('http://127.0.0.1:8000/api/login_check',data);
  }
  register(data1): Observable<any>{
    console.log("service register works");
    return this._http.post('http://127.0.0.1:8000/api/users',data1);
    }
}
