import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [

  { path: 'login', component: ConnexionComponent },
  { path: 'vote', component: VoteComponent },

  // redirection par défault vers /a
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
