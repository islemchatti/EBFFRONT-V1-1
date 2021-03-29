import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moteur2',
  templateUrl: './moteur2.component.html',
  styleUrls: ['./moteur2.component.scss']
})
export class Moteur2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headers = ["Type billet", "Solde", "Année", "Restant"];

  membres = [
    {
      "Type billet": "XXX",
      "Solde": "3",
      "Année": "2021",
      "Restant": "2",
    },
    {
      "Type billet": "XXX",
      "Solde": "3",
      "Année": "2021",
      "Restant": "2",
    },
    {
      "Type billet": "XXX",
      "Solde": "3",
      "Année": "2021",
      "Restant": "2",
    },

  ];
}