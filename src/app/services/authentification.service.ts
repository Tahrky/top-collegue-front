import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { CollegueEmailNomPrenomsPhotoURLRoles } from '../models/CollegueEmailNomPrenomsPhotoURLRoles';

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

    collegueEnCours:CollegueEmailNomPrenomsPhotoURLRoles;
    constructor (private _serveur:HttpClient) {
      this.getMe ().subscribe (col => {
        this.collegueEnCours = col;
      }, err => console.log (err));
    }

    authentification (user:UtilisateurMailMotDePasse) {
      console.log (user.email + " " + user.motDePasse);
      return this._serveur.post<CollegueEmailNomPrenomsPhotoURLRoles> (`${URL_BACKEND}auth`, user, {withCredentials: true});
    }

    deconnexion () {
      return this._serveur.post<boolean> (`${URL_BACKEND}logout`, null,{withCredentials: true});
    }
    
    getMe () {
      return this._serveur.get<CollegueEmailNomPrenomsPhotoURLRoles> (`${URL_BACKEND}me`, {withCredentials: true});
    }    

    upvote (email:string) {
      return this._serveur.patch<void> (`${URL_BACKEND}upvote`, email, {withCredentials: true});
    }

    downvote (email:string) {
      return this._serveur.patch<void> (`${URL_BACKEND}downvote`, email, {withCredentials: true});
    }    

    getCollegues () {
      return this._serveur.get<CollegueEmailNomPrenomsPhotoURLRoles []> (`${URL_BACKEND}collegues`, {withCredentials: true});
    }  
}
