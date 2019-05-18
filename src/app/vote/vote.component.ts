import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { CollegueEmailNomPrenomsPhotoURLRoles } from '../models/CollegueEmailNomPrenomsPhotoURLRoles';
import { Note } from '../models/Note';
import { timeout } from 'rxjs/operators';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

    collegues: CollegueEmailNomPrenomsPhotoURLRoles[];
    messageVote:string = "";

    constructor(private _serviceAuthentification: AuthentificationService) { }

    ngOnInit() {
        this._serviceAuthentification.getCollegues().subscribe(col => this.collegues = col);
    }

    upvote(email: string) {
        let note = new Note (1, email);
        this._serviceAuthentification.vote(note).subscribe(() => {
            this.messageVote="vous avez voté !";
            setTimeout (() => {this.messageVote = ""}, 2000);
        });
    }

    downvote(email: string) {
        let note = new Note (2, email);
        this._serviceAuthentification.vote(note).subscribe(() => {
            this.messageVote="vous avez voté !";
            setTimeout (() => {this.messageVote = ""}, 2000);
        });
    }

}
