import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-rep-nontraite-reclam',
  templateUrl: './rep-nontraite-reclam.component.html',
  styleUrls: ['./rep-nontraite-reclam.component.scss']
})
export class RepNontraiteReclamComponent implements OnInit {
  public reclamations = [];
  idreclam: String;
  reclam: Reclamation
  constructor(private reclamService: ReclamationService, private router: Router) { }

  ngOnInit(): void {
    this.idreclam=localStorage.getItem("idreclam");
    this.getReclam(this.idreclam);
  }
  
  
    deleteReclam() {
      this.reclamService.deleteReclam(localStorage.getItem("idreclam")).subscribe(
        (result) => {
          
          this.router.navigateByUrl('/retraite/reclamation');
          
        },
        (error) => {
          console.log(error)
          this.router.navigateByUrl('/retraite/reclamation');
        }
      )
    }
    getReclam(id){
      this.reclamService.getReclam(id).subscribe(
        (result) => {
          console.log(result);
          this.reclam=result as Reclamation;
          
        },
        (error) => {
          console.log(error);
          this.router.navigateByUrl('/retraite/reclamation');
        }
      )
    }

  
  }

