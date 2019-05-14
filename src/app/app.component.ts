import { Component } from '@angular/core';
import { CollegueEmailNomPrenomsPhotoURLRoles } from './models/CollegueEmailNomPrenomsPhotoURLRoles';
import { AuthentificationService } from './services/authentification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app-component.html',
    styles: []
})
export class AppComponent {
    title = 'top-collegue-front';
    collegueConnecte: CollegueEmailNomPrenomsPhotoURLRoles;
    estConnecte: boolean;

    constructor(private _service: AuthentificationService) {
    }

    ngOnInit(): void {
        this._service.prendreAbonnement().subscribe(collegue => {
            this.collegueConnecte = collegue;
        }, err => console.log(err));
        this._service.prendreAbonnementConnexion().subscribe(connexion => this.estConnecte = connexion, err => console.log(err));
    }

    disconnect() {
        this._service.deconnexion().subscribe(() => { }, err => console.log(err));
    }
}
