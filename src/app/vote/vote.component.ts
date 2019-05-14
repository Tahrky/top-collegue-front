import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { CollegueEmailNomPrenomsPhotoURLRoles } from '../models/CollegueEmailNomPrenomsPhotoURLRoles';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  collegues: CollegueEmailNomPrenomsPhotoURLRoles [];

  constructor(private _serviceAuthentification:AuthentificationService) { }

  ngOnInit() {
    this._serviceAuthentification.getCollegues ().subscribe (col => this.collegues = col);
  }

  upvote (email:string) {
    this._serviceAuthentification.upvote (email).subscribe ();
  }

  downvote (email:string) {
    this._serviceAuthentification.downvote (email).subscribe ();
  }

}
