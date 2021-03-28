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
  constructor(private reclamService: ReclamationService, private router: Router) { }

  ngOnInit(): void {
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
  
  }

