import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { CollegueEmailNomPrenomsPhotoURLRoles } from '../models/CollegueEmailNomPrenomsPhotoURLRoles';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from '../models/Note';
import { CollegueNomPrenomsPhotoURLVote } from '../models/CollegueNomPrenomsPhotoURLVote';

const URL_BACKEND = environment.backendUrl;

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
};

@Injectable({
    providedIn: 'root'
})

export class AuthentificationService {

    collegueEnCours: CollegueEmailNomPrenomsPhotoURLRoles;
    subject: Subject<CollegueEmailNomPrenomsPhotoURLRoles> = new Subject();
    subjectBoolean: Subject<boolean> = new Subject();

    constructor(private _serveur: HttpClient) {
    }

    prendreAbonnement(): Observable<CollegueEmailNomPrenomsPhotoURLRoles> {
        return this.subject.asObservable();
    }

    prendreAbonnementConnexion(): Observable<boolean> {
        return this.subjectBoolean.asObservable();
    }

    authentification(user: UtilisateurMailMotDePasse) {
        return this._serveur.post<CollegueEmailNomPrenomsPhotoURLRoles>(`${URL_BACKEND}auth`, user, { withCredentials: true }).pipe(tap(collegue => {
            this.subject.next(collegue);
            this.subjectBoolean.next(true);
        }));
    }

    deconnexion() {
        return this._serveur.post<boolean>(`${URL_BACKEND}logout`, null, { withCredentials: true }).pipe(tap(() => {
            this.subjectBoolean.next(false);
            this.subject.next(new CollegueEmailNomPrenomsPhotoURLRoles("", "", "", "", Array()));
        }));
    }

    vote(note: Note) {
        return this._serveur.post<void>(`${URL_BACKEND}vote`, note, { withCredentials: true });
    }

    getCollegues() {
        return this._serveur.get<CollegueEmailNomPrenomsPhotoURLRoles[]>(`${URL_BACKEND}collegues`, { withCredentials: true });
    }

    getClassement() {
        return this._serveur.get<CollegueNomPrenomsPhotoURLVote[]>(`${URL_BACKEND}classement`, { withCredentials: true });
    }
}
