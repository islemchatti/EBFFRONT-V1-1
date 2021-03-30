import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public authservice:AuthentificationService,private _router:Router) { } 

  ngOnInit(): void {
  }
  /*admin = this.authservice.isLoggedAdmin() ;*/
  admin=true;
  user = this.authservice.isLoggedUser();
}
