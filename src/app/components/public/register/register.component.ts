import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthentificationService } from 'src/app/services/authentification.service';
import { RetraiteService } from 'src/app/services/retraite.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  constructor(public authservice: AuthentificationService, private _router: Router, builder: FormBuilder) {
  }


  ngOnInit(): void {
    this.initform();
    this.initform2();

    if (this.authservice.isLoggedUser()) {
      this._router.navigateByUrl('/retraite/dashboard');
    }
    if (this.authservice.isLoggedAdmin()) {
      this._router.navigateByUrl('/admin/dashboard');
    }
  }


  initform() {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required,]),
      password: new FormControl("", [Validators.required]),
    });
  }
  initform2() {
    this.registerForm = new FormGroup({

      matricule: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      cin: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      nom: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z 'éèà]*")]),
      prenom: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z 'éèà]*")]),
      email: new FormControl("", [Validators.required, Validators.email]),
      tel: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      adresse: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z0-9 'éèà]*")]),
      cnss: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      genre: new FormControl("Femme", [Validators.required,]),
    });
  }
  loginUser() {
    if (this.loginForm.valid) {

      this.authservice.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          localStorage.setItem("mytoken", result.token);
          this.authservice.getIdUser().subscribe(
            (result2) => {

              localStorage.setItem("ID", String(result2.id));
              console.log(result2);
            },
            (error2) => {
              console.log(error2);


            }
          )
          if (this.authservice.isLoggedUser()) {
            this._router.navigateByUrl('/retraite/dashboard');
            console.log("i am retraite");
          }
          if (this.authservice.isLoggedAdmin()) {

            this._router.navigateByUrl('/admin/dashboard');
            console.log("i am admin");
          }
          console.log("i work2");
        },
        (error) => {
          console.log(error);
          console.log("i dont work");
        }
      )

    }
    else {
      this._router.navigateByUrl('/register');
      console.log("not valid");
    }
  }


  registerUser() {
    if (this.registerForm.valid) {

      this.authservice.register(this.registerForm.value).subscribe(
        (result) => {
          console.log(result);
          console.log("i work");
          this._router.navigateByUrl('/registerValidation');
          localStorage.setItem("mytoken", result.token);
          console.log("i work2");
        },
        (error) => {
          console.log(this.registerForm.value);
          console.log("i dont work");
          this._router.navigateByUrl('/retraite/dashboard');

        }
      )

    }
    else {
      this._router.navigateByUrl('/register');
    }
  }




  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }

  get matricule() { return this.registerForm.get('matricule') }
  get cin() { return this.registerForm.get('cin') }
  get nom() { return this.registerForm.get('nom') }
  get prenom() { return this.registerForm.get('prenom') }
  get email() { return this.registerForm.get('email') }
  get tel() { return this.registerForm.get('tel') }
  get adresse() { return this.registerForm.get('adresse') }
  get cnss() { return this.registerForm.get('cnss') }
  get genre() { return this.registerForm.get('genre') }


}
