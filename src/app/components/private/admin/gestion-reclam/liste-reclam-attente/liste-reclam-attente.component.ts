import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-liste-reclam-attente',
  templateUrl: './liste-reclam-attente.component.html',
  styleUrls: ['./liste-reclam-attente.component.scss']
})
export class ListeReclamAttenteComponent implements OnInit {

  constructor(private reclamService: ReclamationService) { }
  headers = ["Référence", "Matricule", "Date de création", "Objet"];
  reclamations = []

  ngOnInit(): void {
    this.getAllReclam();
  }
  getAllReclam() {

    this.reclamService.getReclamAttente().subscribe(
      (result) => {

        this.reclamations = result;

        console.log(this.reclamations)

      },
      (error) => {
        console.log(error)
      }
    )
  }
  getreclalmId(id) {
    localStorage.setItem("idreclam", id);
    
  }

}
