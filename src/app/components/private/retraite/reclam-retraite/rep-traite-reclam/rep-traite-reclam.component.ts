import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-rep-traite-reclam',
  templateUrl: './rep-traite-reclam.component.html',
  styleUrls: ['./rep-traite-reclam.component.scss']
})
export class RepTraiteReclamComponent implements OnInit {
reclam: Reclamation
  constructor(private reclamService: ReclamationService) { }

  ngOnInit(): void {
    this.getreponse();
  }
  getreponse() {
    let id = localStorage.getItem("idreclam")
    this.reclamService.getReclam(id).subscribe(
      (result) => {
        this.reclam = result;

      },
      (error) => {
        console.log(error)
      }
    )
  }

}
