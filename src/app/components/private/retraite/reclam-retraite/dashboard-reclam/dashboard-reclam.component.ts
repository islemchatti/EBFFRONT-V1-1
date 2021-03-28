import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-dashboard-reclam',
  templateUrl: './dashboard-reclam.component.html',
  styleUrls: ['./dashboard-reclam.component.scss']
})
export class DashboardReclamComponent implements OnInit {
  headers = ["Référence", "Date de création", "Objet"];
  reclamations = [];
  reclam;
  constructor(private router: Router, private reclamService: ReclamationService,) { }

  ngOnInit(): void {
    this.getAllReclam()
  }
  getAllReclam() {
    let id = localStorage.getItem("ID")
    this.reclamService.getAllReclam(id).subscribe(
      (result) => {
        
        this.reclamations = result ;
        
        console.log(this.reclamations)

      },
      (error) => {
        console.log(error)
      }
    )
  }
  suivi(id){
    this.reclamService.getReclam(id).subscribe(
      (result) => {
        
        this.reclam = result ;
        if(this.reclam.Matricule_admin!=null || this.reclam.contenu_admin!=null)
        {
          this.router.navigateByUrl('/retraite/rep-traite-reclam');
          console.log(this.reclam)
        }
        else{
          this.router.navigateByUrl('/retraite/rep-nontraite-reclam');
          console.log(this.reclam)
          localStorage.setItem("idreclam",id)      
         }
      },
      (error) => {
        console.log(error)
        console.log(this.reclam)
      }
    )
  }

}
