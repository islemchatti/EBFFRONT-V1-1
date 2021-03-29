import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retraite } from '../models/retraite';


@Injectable({
  providedIn: 'root'
})
export class RetraiteService {

  constructor(private http: HttpClient) { }

  public baseURL="http://127.0.0.1:8000/api/";
  public AllRetraitesURL=this.baseURL+"users";
  public DeleteRetraitesURL=this.baseURL+"users/"; 
  public getRetraitesURL=this.baseURL+"users/"; 
  public getRetraitesMatURL=this.baseURL+"users/mat/"; 
  public ActivateRetraitesURL=this.baseURL+"users/activate/";
  public DesactivateRetraitesURL=this.baseURL+"users/desactivate/";
  public UpdateRetraitesURL=this.baseURL+"users/";
  public AllRetraitesAttenteURL=this.baseURL+"users/attente";
  public validerRetraiteURL=this.baseURL+"send-email/";

  getAllRetraites(): Observable<any>
  {
    let dataFormaAPI = this.http.get<Retraite[]>(this.AllRetraitesURL)
    return dataFormaAPI
  }
  getRetraite(id){
    let dataFormaAPI = this.http.get<Retraite>(this.getRetraitesURL + id)
    return dataFormaAPI
  }
  getRetraiteMat(mat){
    let dataFormaAPI = this.http.get<Retraite>(this.getRetraitesMatURL + mat)
    return dataFormaAPI
  }
  
  deleteRetraite(id){
    let dataFormaAPI = this.http.delete<any>(this.DeleteRetraitesURL + id)
    return dataFormaAPI
  }
  activerRetraite(id){
    let dataFormaAPI = this.http.put<any>(this.ActivateRetraitesURL + id, "true")
    return dataFormaAPI
  }
  desactiverRetraite(id){
    let dataFormaAPI = this.http.put<any>(this.DesactivateRetraitesURL + id, "false")
    return dataFormaAPI
  }
  updateRetraite(id, data){
    let dataFormaAPI = this.http.put<any>(this.UpdateRetraitesURL + id, data)
    return dataFormaAPI
  }

  getRetraitesAttente(): Observable<any>{
    let dataFormaAPI = this.http.get<Retraite[]>(this.AllRetraitesAttenteURL)
    return dataFormaAPI
  }

  validerRetraite(id){
    let dataFormaAPI = this.http.get<any>(this. validerRetraiteURL + id)
    return dataFormaAPI
  }
}