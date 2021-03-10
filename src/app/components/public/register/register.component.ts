import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public signinForm: FormGroup;
  public registerForm: FormGroup;
  constructor(builder: FormBuilder, builder2: FormBuilder) {
    let signinformscontrol = {
      login: new FormControl(),
      password: new FormControl(),
    }
    this.signinForm = builder.group(signinformscontrol);

    let registerformscontrol = {
      matricule: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      cin: new FormControl(),
      cnss: new FormControl(),
      tel: new FormControl(),
      adresse: new FormControl(),
    }

    this.registerForm = builder2.group(registerformscontrol);
  }

  ngOnInit(): void {
  }

  get login() { return this.signinForm.get('login') }
  get password() { return this.signinForm.get('password') }

  get matricule() { return this.registerForm.get('matricule') }
  get nom() { return this.registerForm.get('nom') }
  get prenom() { return this.registerForm.get('prenom') }
  get cin() { return this.registerForm.get('cin') }
  get cnss() { return this.registerForm.get('cnss') }
  get adresse() { return this.registerForm.get('adresse') }
  get tel() { return this.registerForm.get('tel') }
  get email() { return this.registerForm.get('email') }


  signinUser() {
    console.log(this.signinForm.value);
  }
  registerUser() {
    console.log(this.registerForm.value);
  }


}
