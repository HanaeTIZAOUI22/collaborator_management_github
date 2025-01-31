package com.company.controller;

import com.company.model.Collaborator;
import com.company.service.CollaboratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/collaborators")
public class CollaboratorController {
    @Autowired
    private CollaboratorService service;

    @GetMapping
    public List<Collaborator> getAllCollaborators() {
        return service.getAllCollaborators();
    }

    @PostMapping
    public Collaborator createCollaborator(@RequestBody Collaborator collaborator) {
        return service.saveCollaborator(collaborator);
    }

    @DeleteMapping("/{id}")
    public void deleteCollaborator(@PathVariable String id) {
        service.deleteCollaborator(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Collaborator> getCollaboratorById(@PathVariable String id) {
        Optional<Collaborator> collaborator = service.findById(id);
        return collaborator.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ✅ PUT Mise à jour d'un Collaborateur
    @PutMapping("/{id}")
    public ResponseEntity<Collaborator> updateCollaborator(@PathVariable String id, @RequestBody Collaborator updatedCollaborator) {
        Optional<Collaborator> updated = service.updateCollaborator(id, updatedCollaborator);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
