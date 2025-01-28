import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorListComponent } from './components/collaborator-list/collaborator-list.component';
import { CollaboratorFormComponent } from './components/collaborator-form/collaborator-form.component';
import { CollaboratorDetailsComponent } from './components/collaborator-details/collaborator-details.component';

const routes: Routes = [
  { path: '', component: CollaboratorListComponent },
  { path: 'add', component: CollaboratorFormComponent },
  { path: 'edit/:id', component: CollaboratorFormComponent },
  { path: 'details/:id', component: CollaboratorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
