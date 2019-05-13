import { Component, OnInit } from '@angular/core';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  utilisateur:UtilisateurMailMotDePasse;

  constructor() { }

  ngOnInit() {
    this.utilisateur = new UtilisateurMailMotDePasse ("ab@a.a", "pass1", "");
  }

  submit () {
  }
}

