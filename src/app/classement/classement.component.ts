import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { CollegueNomPrenomsPhotoURLVote } from '../models/CollegueNomPrenomsPhotoURLVote';

@Component({
    selector: 'app-classement',
    templateUrl: './classement.component.html',
    styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

    collegues: CollegueNomPrenomsPhotoURLVote[];

    constructor(private _serviceAuthentification: AuthentificationService) { }

    ngOnInit() {
        this._serviceAuthentification.getClassement().subscribe(col => this.collegues = col);
    }

}
