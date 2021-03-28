import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-liste-reclam',
  templateUrl: './liste-reclam.component.html',
  styleUrls: ['./liste-reclam.component.scss']
})
export class ListeReclamComponent implements OnInit {

  constructor(private reclamService: ReclamationService) { }
  headers = ["Référence", "Date d'envoi","Matricule", "Objet","Date de réponse"];
  reclamations = []
  ngOnInit(): void {
    this.getAllReclam();
  }
  getAllReclam() {

    this.reclamService.AllReclamAdmin(localStorage.getItem("ID")).subscribe(
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
