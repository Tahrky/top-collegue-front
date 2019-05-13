import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { CollegueMatriculeNomPrenomsRoles } from '../models/CollegueMatriculeNomPrenomsRoles';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

    collegueEnCours:CollegueMatriculeNomPrenomsRoles;

    constructor (private _serveur:HttpClient) {
      this.getMe ().subscribe (col => {
        this.collegueEnCours = col;
      }, err => console.log (err));
    }

    authentification (user:UtilisateurMailMotDePasse) {
      return this._serveur.post<CollegueMatriculeNomPrenomsRoles> (`${URL_BACKEND}auth`, user, {withCredentials: true});
    }

    deconnexion () {
      return this._serveur.post<boolean> (`${URL_BACKEND}logout`, null,{withCredentials: true});
    }
    
    getMe () {
      return this._serveur.get<CollegueMatriculeNomPrenomsRoles> ((`${URL_BACKEND}me`), {withCredentials: true});
    }    
}
