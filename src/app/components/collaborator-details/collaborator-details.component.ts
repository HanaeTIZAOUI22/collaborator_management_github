import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService, Collaborator } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-collaborator-details',
  templateUrl: './collaborator-details.component.html',
  styleUrls: ['./collaborator-details.component.scss']
})
export class CollaboratorDetailsComponent implements OnInit {
  collaborator: Collaborator | undefined;

  constructor(
    private collaboratorService: CollaboratorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.collaboratorService.getCollaborator(id).subscribe(data => {
        this.collaborator = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // Redirige vers la liste des collaborateurs
  }
}
