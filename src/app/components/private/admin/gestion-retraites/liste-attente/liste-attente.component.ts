import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retraite } from 'src/app/models/retraite';
import { RetraiteService } from 'src/app/services/retraite.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-liste-attente',
  templateUrl: './liste-attente.component.html',
  styleUrls: ['./liste-attente.component.scss']
})
export class ListeAttenteComponent implements OnInit {
  constructor(private retraiteService: RetraiteService, private variablesServices:VariablesService, private router: Router) { }
  headers = ["", "Matricule", "Nom", "Prénom", "Email",
    "CIN", "CNSS", "Adresse", "Tèl"];
  cols = ["id", "matricule", "nom", "prenom", "email",
    "cin", "cnss", "adresse", "tel"];
  public retraites = [];
  public ret: Retraite;
 
  
  ngOnInit(): void {
    this.getAllRetraitesAttente();
  }

  getAllRetraitesAttente(){
    
    this.retraiteService.getRetraitesAttente().subscribe(
      (result) => {
        this.retraites = result as Retraite[];
      },
      (error) => {
        console.log(error)
      }
    )
  }

  delete(retraite) {
    // Suppression de l'affichage
    this.retraites.splice(this.retraites.indexOf(retraite), 1)
    // Suppression de la BD
    this.retraiteService.deleteRetraite(retraite.id).subscribe(
      (result) => {
        // this.Retraites = result => si l api retourne la liste sans l'objet supprimé
        this.getAllRetraitesAttente()
      },
      (error) => {
        console.log(error)
      }
    )
  }
  valider(retraite){
   this.retraiteService.validerRetraite(retraite.id).subscribe(
    (result) => {
      this.getAllRetraitesAttente()
    },
    (error) => {
      console.log(error)
    }
  )
  }
}
