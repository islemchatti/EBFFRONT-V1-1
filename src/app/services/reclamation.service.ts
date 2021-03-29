import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retraite } from '../models/retraite';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  public baseURL="http://127.0.0.1:8000/api/";
  public AllReclamURL=this.baseURL+"reclamations/list/";
  public getReclamURL=this.baseURL+"reclamations/"; 
  public DeleteReclamURL=this.baseURL+"reclamations/"; 
  public AllReclamAttenteURL=this.baseURL+"reclamations/list-attente";
  public createReclamURL=this.baseURL+"reclamations/";
  public AllReclamAdminURL=this.baseURL+"reclamations/Adminlist/";
  public RepondreReclamnURL=this.baseURL+"reclamations/repondre/";

  getAllReclam(id): Observable<any>
  {
    let dataFormaAPI = this.http.get<Reclamation[]>(this.AllReclamURL + id)
    return dataFormaAPI
  }
  getReclam(id){
    let dataFormaAPI = this.http.get<Reclamation>(this.getReclamURL + id)
    return dataFormaAPI
  }
  
  deleteReclam(id){
    let dataFormaAPI = this.http.delete<any>(this.DeleteReclamURL + id)
    return dataFormaAPI
  }

  getReclamAttente(): Observable<any>{
    let dataFormaAPI = this.http.get<Reclamation[]>(this.AllReclamAttenteURL)
    return dataFormaAPI
  }
  createReclam(id,data): Observable<any>{
    let dataFormaAPI= this.http.post(this.createReclamURL+id,data);
    return dataFormaAPI
  }
 AllReclamAdmin(id){
  let dataFormaAPI = this.http.get<Reclamation[]>(this.AllReclamAdminURL + id)
  return dataFormaAPI
 }
 repondreReclam(id, data1): Observable<any>{
  let dataFormaAPI= this.http.put(this.RepondreReclamnURL+id,data1);
  return dataFormaAPI
}

}
