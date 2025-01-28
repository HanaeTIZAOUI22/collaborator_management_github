import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService, Collaborator } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-collaborator-form',
  templateUrl: './collaborator-form.component.html',
  styleUrls: ['./collaborator-form.component.scss']
})
export class CollaboratorFormComponent implements OnInit {
  collaborator: Collaborator = { firstName: '', lastName: '', email: '', position: '' };
  isEditMode = false;

  constructor(
    private collaboratorService: CollaboratorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.collaboratorService.getCollaborator(id).subscribe(data => {
        this.collaborator = data;
      });
    }
  }

  saveCollaborator(): void {
    if (this.isEditMode) {
      this.collaboratorService.updateCollaborator(this.collaborator.id!, this.collaborator)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.collaboratorService.createCollaborator(this.collaborator)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
