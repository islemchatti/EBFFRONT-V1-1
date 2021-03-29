import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { Retraite } from 'src/app/models/retraite';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { RetraiteService } from 'src/app/services/retraite.service';

@Component({
  selector: 'app-contenu-reclam',
  templateUrl: './contenu-reclam.component.html',
  styleUrls: ['./contenu-reclam.component.scss']
})
export class ContenuReclamComponent implements OnInit {
  idreclam=localStorage.getItem("idreclam");
  reclam: Reclamation
  ret: Retraite
  nom: String
  constructor(public reclamservice: ReclamationService, private retraiteservice: RetraiteService, private _router: Router) { }

  ngOnInit(): void {
    this.getReclam(this.idreclam)
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
