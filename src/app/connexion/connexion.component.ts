import { Component, OnInit } from '@angular/core';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

    utilisateur: UtilisateurMailMotDePasse;

    constructor(private router: Router, private _serviceAuthentification: AuthentificationService) { }

    ngOnInit() {
        this.utilisateur = new UtilisateurMailMotDePasse("ab@a.a", "pass", "");
    }

    submit() {
        this._serviceAuthentification.authentification(this.utilisateur)
        .subscribe(() => {
            this.router.navigate(['/vote'])
        });
    }
}

