import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetraiteService } from 'src/app/services/retraite.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { VariablesService } from 'src/app/services/variables.service';
import { Retraite } from 'src/app/models/retraite';

@Component({
  selector: 'app-update-retraite',
  templateUrl: './update-retraite.component.html',
  styleUrls: ['./update-retraite.component.scss']
})
export class UpdateRetraiteComponent implements OnInit {

  constructor(private retservice: RetraiteService, private router: Router, private vars: VariablesService) { }
  public updateForm: FormGroup;
  public idre= this.vars.idRet;
  public  ret1:Retraite
  ngOnInit(): void {
    this.initform()
    this.getRet(this.idre)
  }

  initform() {
    this.updateForm = new FormGroup({

      matricule: new FormControl("", [Validators.required,]),
      cin: new FormControl("", [Validators.required,]),
      nom: new FormControl("", [Validators.required,]),
      prenom: new FormControl("", [Validators.required,]),
      email: new FormControl("", [Validators.required,]),
      tel: new FormControl("", [Validators.required,]),
      adresse: new FormControl("", [Validators.required,]),
      cnss: new FormControl("", [Validators.required,]),
      genre: new FormControl("Femme", [Validators.required,]),
    });
  }
   getRet(idre){
    this.retservice.getRetraite(idre).subscribe(
      (result) => {
        this.ret1=result as Retraite
        console.log(this.ret1);

      },
      (error) => {
        console.log(error);

      }
    )
   }



  updateRetraite() {

    if (this.updateForm.valid) {

      this.retservice.updateRetraite(this.idre, this.updateForm.value).subscribe(
        (result) => {
          console.log("je marche");
          this.router.navigateByUrl('/admin/liste');

        },
        (error) => {
          console.log("je marche pas");
          console.log(this.idre)

        }
      )

    }
    else {
      this.router.navigateByUrl('/register');
    }
  }

  get matricule(){return this.updateForm.get('matricule')}
  get cin(){return this.updateForm.get('cin')}
  get nom(){return this.updateForm.get('nom')}
  get prenom(){return this.updateForm.get('prenom')}
  get email(){return this.updateForm.get('email')}
  get tel(){return this.updateForm.get('tel')}
  get adresse(){return this.updateForm.get('adresse')}
  get cnss(){return this.updateForm.get('cnss')}
  get genre(){return this.updateForm.get('genre')}
}
