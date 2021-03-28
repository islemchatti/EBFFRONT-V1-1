import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retraite } from 'src/app/models/retraite';
import { RetraiteService } from 'src/app/services/retraite.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  constructor(private retraiteService: RetraiteService, private variablesServices:VariablesService, private router: Router) { }
  headers = ["", "Matricule", "Nom", "Prénom", "Email",
    "CIN", "CNSS", "Adresse", "Tèl"];
  cols = ["id", "matricule", "nom", "prenom", "email",
    "cin", "cnss", "adresse", "tel"];
  public retraites = [];
  public ret: Retraite;
  public checkrets = new Boolean(["true", "false"]);
  public Allretraites: any[] = [];
 
  
  ngOnInit(): void {
    this.getAllRetraites();
    console.log("i woooooork")


  }
  getAllRetraites() {
    this.retraiteService.getAllRetraites().subscribe(
      (result) => {
        this.retraites = result as Retraite[];
        this.Allretraites = result as Retraite[];
        for (let retraite of this.retraites) {
          if (retraite.active == "true") {
            this.checkrets[this.retraites.indexOf(retraite)] = true;
          }
          else {
            this.checkrets[this.retraites.indexOf(retraite)] = false;
          }
        }

      },
      (error) => {
        console.log(error)
      }
    )

  }


  delete(retraite) {
    // Suppression de l'affichage
    this.retraites.splice(this.retraites.indexOf(retraite), 1)
    this.Allretraites.splice(this.Allretraites.indexOf(retraite), 1)
    // Suppression de la BD
    this.retraiteService.deleteRetraite(retraite.id).subscribe(
      (result) => {
        // this.Retraites = result => si l api retourne la liste sans l'objet supprimé
        this.getAllRetraites()
      },
      (error) => {
        console.log(error)
      }
    )
  }
activate(retraite){
  this.retraiteService.getRetraite(retraite.id).subscribe(
    (result) => {
      this.ret = result as Retraite;
      console.log("retraite ")
      if (this.ret.active=="true") {
        this.retraiteService.desactiverRetraite(this.ret.id).subscribe(
          (result1) => {
            console.log("done desactiver")
            this.checkrets[this.retraites.indexOf(this.ret)] = false;
          },
          (error1) => {
            console.log(error1)
          }
        )
      } else {
        this.retraiteService.activerRetraite(this.ret.id).subscribe(
          (result2) => {
            console.log("done activer")
            this.checkrets[this.retraites.indexOf(this.ret)] = true;
          },
          (error2) => {
            console.log(error2)
          }
        )
      }
    },
    (error) => {
      console.log(error)
    }    
  )
}

update(retraite){
this.variablesServices.idRet=retraite.id;
this.router.navigateByUrl('/admin/update');
}

recherche(value) {
  
  this.retraites = this.Allretraites.filter(r => {
    return (
      r.matricule.includes(value) ||
      r.nom.includes(value) ||
      r.prenom.includes(value) ||
      r.cin.includes(value)
    )
  }
  )
}


}