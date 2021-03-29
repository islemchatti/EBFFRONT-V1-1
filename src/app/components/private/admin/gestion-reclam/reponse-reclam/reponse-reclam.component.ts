import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { Retraite } from 'src/app/models/retraite';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { RetraiteService } from 'src/app/services/retraite.service';

@Component({
  selector: 'app-reponse-reclam',
  templateUrl: './reponse-reclam.component.html',
  styleUrls: ['./reponse-reclam.component.scss']
})
export class ReponseReclamComponent implements OnInit {
  public ReponseReclam: FormGroup;
  idreclam=localStorage.getItem("idreclam");
  reclam: Reclamation
  ret: Retraite
  nom: String
  constructor(public reclamservice: ReclamationService, private retraiteservice: RetraiteService, private _router: Router, builder: FormBuilder) {}

  ngOnInit(): void {
    this.initform();
    this.getReclam(this.idreclam);
  }
  initform() {
    this.ReponseReclam = new FormGroup({
      contenu_admin: new FormControl("", [Validators.required]),
      id: new FormControl(localStorage.getItem("idreclam"), [Validators.required]),
    });
  }
  get contenu_admin() { return this.ReponseReclam.get('contenu_admin') }
  repondre(){
    if (this.ReponseReclam.valid) {

      this.reclamservice.repondreReclam(localStorage.getItem("ID"),this.ReponseReclam.value).subscribe(
        (result) => {
          console.log(result);
          console.log("i wooooork iselem");

          this._router.navigateByUrl('/admin/liste-reclam-attente');
          
        },
        (error) => {
          console.log(error);
          this._router.navigateByUrl('/admin/liste-reclam-attente');
        }
      )

    }
    else {
      this._router.navigateByUrl('/register');
    }
  }
  getReclam(idreclam){
    this.reclamservice.getReclam(idreclam).subscribe(
      (result) => {
        console.log(result);
        this.reclam=result as Reclamation;
        this.retraiteservice.getRetraiteMat(this.reclam.matricule_ret).subscribe(
          (result) => {
            console.log(result);
            this.ret=result
            this.nom=this.ret.nom+" "+this.ret.prenom;
            
          },
          (error) => {
            console.log(error);
            this._router.navigateByUrl('/admin/liste-reclam-attente');
          }
        )
        
      },
      (error) => {
        console.log(error);
        this._router.navigateByUrl('/admin/liste-reclam-attente');
      }
    )
  }

}
