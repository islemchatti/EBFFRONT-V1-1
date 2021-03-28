import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reponse-reclam',
  templateUrl: './reponse-reclam.component.html',
  styleUrls: ['./reponse-reclam.component.scss']
})
export class ReponseReclamComponent implements OnInit {
  public ReponseReclam: FormGroup;
  constructor(public reclamservice: ReclamationService, private _router: Router, builder: FormBuilder) {}

  ngOnInit(): void {
    this.initform();
  }
  initform() {
    this.ReponseReclam = new FormGroup({
      object: new FormControl("", [Validators.required,]),
      contenu_admin: new FormControl("", [Validators.required]),
      id: new FormControl(localStorage.getItem("idreclam"), [Validators.required]),
    });
  }
  get object() { return this.ReponseReclam.get('object') }
  get contenu_admin() { return this.ReponseReclam.get('contenu_admin') }
  repondre(){
    if (this.ReponseReclam.valid) {

      this.reclamservice.repondreReclam(localStorage.getItem("ID"),this.ReponseReclam.value).subscribe(
        (result) => {
          console.log(result);
          this._router.navigateByUrl('/admin/liste-reclam-attente');
          
        },
        (error) => {
          console.log(error);
          this._router.navigateByUrl('/admin/liste-reclam-attente');
        }
      )

    }
    else {
      this._router.navigateByUrl('/register');
    }
  }

}
