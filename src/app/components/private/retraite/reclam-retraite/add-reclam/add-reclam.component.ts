import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';


@Component({
  selector: 'app-add-reclam',
  templateUrl: './add-reclam.component.html',
  styleUrls: ['./add-reclam.component.scss']
})
export class AddReclamComponent implements OnInit {
  public AddReclam: FormGroup;
  public uploadfile = null;
  constructor(public reclamservice: ReclamationService, private _router: Router, builder: FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }
  initform() {
    this.AddReclam = new FormGroup({
      object: new FormControl("", [Validators.required,]),
      contenu: new FormControl("", [Validators.required]),
      pieces_jointes_ret: new FormControl(this.uploadfile),
    });
  }
  get object() { return this.AddReclam.get('object') }
  get contenu() { return this.AddReclam.get('contenu') }
  addReclam() {

    const data = new FormData();
    data.append('uploadfile', this.uploadfile);
    data.append('form', this.AddReclam.value);
    this.reclamservice.createReclam(localStorage.getItem("ID"), data).subscribe(
      (result) => {
        console.log(result);
        this._router.navigateByUrl('/retraite/reclamation');

      },
      (error) => {
        console.log(error);
        this._router.navigateByUrl('/retraite/reclamation');
      }
    )

  }

  onFileSelect(file: File) {
    this.uploadfile = file;
    console.log(this.uploadfile);
  }
}
