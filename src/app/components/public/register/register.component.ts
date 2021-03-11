import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms'
import{Router} from '@angular/router'
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  constructor(public authservice:AuthentificationService,private _router:Router) { }

  ngOnInit(): void {
    this.initform();
    this.initform2();
  }
  initform(){
    this.loginForm=new FormGroup({
      username: new FormControl("",[Validators.required,]),
      password: new FormControl("",[Validators.required,]),
    });
  }
  initform2(){
    this.registerForm=new FormGroup({
      
      matricule: new FormControl("",[Validators.required,]),
      cin: new FormControl("",[Validators.required,]),
      nom: new FormControl("",[Validators.required,]),
      prenom: new FormControl("",[Validators.required,]),
      email: new FormControl("",[Validators.required,]),
      tel: new FormControl("",[Validators.required,]),
      adresse: new FormControl("",[Validators.required,]),
      cnss: new FormControl("",[Validators.required,]),
    });
  }
  loginUser(){
    if(this.loginForm.valid){

         this.authservice.login(this.loginForm.value).subscribe(
           (result)=>{ 
                       console.log(result);
                       console.log("i work");
                       this._router.navigateByUrl('/retraite/dashboard');
                       console.log("i work2");
                    },
           (error)=>{
                      console.log(this.loginForm.value);
                      console.log("i dont work");
                      
                      this._router.navigateByUrl('/retraite/dashboard');
                   
                    }
          )

    }
    else{
      this._router.navigateByUrl('/register');
    }
  }
  

  registerUser(){
    if(this.registerForm.valid){

         this.authservice.register(this.registerForm.value).subscribe(
           (result)=>{ 
                       console.log(result);
                       console.log("i work");
                       this._router.navigateByUrl('/retraite/dashboard');
                       console.log("i work2");
                    },
           (error)=>{
                      console.log(this.registerForm.value);
                      console.log("i dont work");
                      this._router.navigateByUrl('/retraite/dashboard');
                   
                    }
          )

    }
    else{
      this._router.navigateByUrl('/register');
    }
  }




  get username(){return this.loginForm.get('username')}
  get password(){return this.loginForm.get('password')}

  get matricule(){return this.registerForm.get('matricule')}
  get cin(){return this.registerForm.get('cin')}
  get nom(){return this.registerForm.get('nom')}
  get prenom(){return this.registerForm.get('prenom')}
  get email(){return this.registerForm.get('email')}
  get tel(){return this.registerForm.get('tel')}
  get adresse(){return this.registerForm.get('adresse')}
  get cnss(){return this.registerForm.get('cnss')}


}
