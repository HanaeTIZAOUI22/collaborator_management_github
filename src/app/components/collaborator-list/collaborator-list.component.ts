import { Component, OnInit } from '@angular/core';
import { CollaboratorService, Collaborator } from 'src/app/services/collaborator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.scss']
})
export class CollaboratorListComponent implements OnInit {
  collaborators: Collaborator[] = [];

  constructor(
    private collaboratorService: CollaboratorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCollaborators();
  }

  loadCollaborators(): void {
    this.collaboratorService.getCollaborators().subscribe(data => {
      this.collaborators = data;
    }, error => {
      console.error('Erreur lors du chargement des collaborateurs:', error);
    });
  }

  editCollaborator(id?: string): void {
    if (id) {
      this.router.navigate(['/edit', id]); // Redirige vers la page de modification
    }
  }

  deleteCollaborator(id?: string): void {
    if (id && confirm('Voulez-vous vraiment supprimer ce collaborateur ?')) {
      this.collaboratorService.deleteCollaborator(id).subscribe(() => {
        this.loadCollaborators(); // Recharge la liste après suppression
      });
    }
  }
}
