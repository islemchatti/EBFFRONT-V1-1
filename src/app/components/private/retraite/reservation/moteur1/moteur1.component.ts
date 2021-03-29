import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moteur1',
  templateUrl: './moteur1.component.html',
  styleUrls: ['./moteur1.component.scss']
})
export class Moteur1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headers = ["Nom", "Prénom", "Code P", "Ordre", "Quotat"];

  membres = [
    { "Nom": "Zoghlami",
      "Prénom": "Ridha",
      "Code P": "1",
      "Ordre": "0",
      "Quotat": "3",
    },
    { "Nom": "Zoghlami",
      "Prénom": "Laila",
      "Code P": "1",
      "Ordre": "1",
      "Quotat": "3",
    },
    { "Nom": "Zoghlami",
      "Prénom": "Rania",
      "Code P": "1",
      "Ordre": "2",
      "Quotat": "3",
    }

  ];

}