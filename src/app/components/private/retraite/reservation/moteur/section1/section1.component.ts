import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms'




@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  public reserverForm: FormGroup;
  constructor(builder:FormBuilder) {
    let reserverformscontrol= {
      billet: new FormControl("allersimple"),
      locdepart: new FormControl("",[Validators.required,]),
      locarrive: new FormControl("",[Validators.required,]),
      datedepart: new FormControl("",[Validators.required,]),
      datearrive: new FormControl("",[Validators.required,]),
      adultes: new FormControl("1"),
      jeunes: new FormControl("0"),
      enfants: new FormControl("0"),
      bebes: new FormControl("0"),
      carte: new FormControl("0"),
      
   }
   this.reserverForm=builder.group(reserverformscontrol);
  }

  ngOnInit(): void {
  }
  get billet(){return this.reserverForm.get('billet')}
  get locdepart(){return this.reserverForm.get('locdepart')}
  get locarrive(){return this.reserverForm.get('locarrive')}
  get datedepart(){return this.reserverForm.get('datedepart')}
  get datearrive(){return this.reserverForm.get('datearrive')}
  get adultes(){return this.reserverForm.get('adultes')}
  get jeunes(){return this.reserverForm.get('jeunes')}
  get enfants(){return this.reserverForm.get('enfants')}
  get bebes(){return this.reserverForm.get('bebes')}
  get carte(){return this.reserverForm.get('carte')}
 

  reserverUser(){
    console.log(this.reserverForm.value)
  }

}
