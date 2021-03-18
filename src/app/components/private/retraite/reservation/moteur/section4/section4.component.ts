import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  headers = ["", "Numéro du vol", "Escale départ", "Escale arrivée", "Etat du vol",
    "Départ programmé", "Arrivée programmée", "Départ estimé", "Arrivée estimée"];

  vols = [
    { "": "1",
      "Numéro du vol": "111",
      "Escale départ": "aa",
      "Escale arrivée": "aa",
      "Etat du vol": "aa",
      "Départ programmé": "aa",
      "Arrivée programmée": "aa",
      "Départ estimé": "aa",
      "Arrivée estimée": "aa"
    },
    { "": "2",
      "Numéro du vol": "222",
      "Escale départ": "bb",
      "Escale arrivée": "bb",
      "Etat du vol": "bb",
      "Départ programmé": "bb",
      "Arrivée programmée": "bb",
      "Départ estimé": "bb",
      "Arrivée estimée": "bb"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
