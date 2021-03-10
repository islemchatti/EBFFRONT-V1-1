import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  headers = ["", "Matricule", "Nom", "Prénom", "Email",
  "CIN", "CNSS", "Adresse", "Tèl"];

vols = [
  { "": "1",
    "Matricule": "214152",
    "Nom": "Nebli",
    "Prénom": "Sarra",
    "Email": "sarranebli99@gmaail.com",
    "CIN": "13021497",
    "CNSS": "74857485",
    "Adresse": "Tunis Bardo",
    "Tèl": "26535969",
  
  },
  { "": "2",
    "Matricule": "967412",
    "Nom": "Chatti",
    "Prénom": "Islem",
    "Email": "chattiislem@gmaail.com",
    "CIN": "78523695",
    "CNSS": "12451245",
    "Adresse": "Tunis Bardo",
    "Tèl": "58963124",
  
  }

];
  constructor() { }

  ngOnInit(): void {
  }

}
