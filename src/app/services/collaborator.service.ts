import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Collaborator {
  id?: string; // L'ID est optionnel (MongoDB génère un ObjectId)
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  private apiUrl = 'http://localhost:8080/api/collaborators';

  constructor(private http: HttpClient) {}

  getCollaborators(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.apiUrl);
  }

  getCollaborator(id: string): Observable<Collaborator> {
    return this.http.get<Collaborator>(`${this.apiUrl}/${id}`);
  }

  createCollaborator(collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.apiUrl, collaborator);
  }

  updateCollaborator(id: string, collaborator: Collaborator): Observable<Collaborator> {
    return this.http.put<Collaborator>(`${this.apiUrl}/${id}`, collaborator);
  }

  deleteCollaborator(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
