import { Component, OnInit } from '@angular/core';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  utilisateur:UtilisateurMailMotDePasse;

  constructor(private _serviceAuthentification:AuthentificationService) { }

  ngOnInit() {
    this.utilisateur = new UtilisateurMailMotDePasse ("ab@a.a", "pass2", "");
  }

  submit () {
    this._serviceAuthentification.authentification (this.utilisateur).subscribe ();
  }
}

