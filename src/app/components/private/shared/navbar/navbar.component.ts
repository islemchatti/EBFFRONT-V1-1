import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public authService: AuthentificationService) { }
  public noun;
  ngOnInit(): void {
this.getnoun();

  }
  Logout() {
    localStorage.removeItem("mytoken");
    localStorage.removeItem("ID");
    localStorage.removeItem("idreclam");
    this.router.navigateByUrl('/register');
  }
  getnoun() {
    this.authService.getNomUser().subscribe(
      (result) => {
        this.noun = result;
      },
      (error) => {

        this.noun = error;

      }
    )
  }

}
