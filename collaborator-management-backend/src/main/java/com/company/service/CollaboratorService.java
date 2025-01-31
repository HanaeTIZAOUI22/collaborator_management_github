package com.company.service;

import com.company.model.Collaborator;
import com.company.repository.CollaboratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CollaboratorService {
    @Autowired
    private CollaboratorRepository repository;

    public List<Collaborator> getAllCollaborators() {
        return repository.findAll();
    }

    public Collaborator saveCollaborator(Collaborator collaborator) {
        return repository.save(collaborator);
    }

    public void deleteCollaborator(String id) {
        repository.deleteById(id);
    }

    public Optional<Collaborator> findById(String id) {
        return repository.findById(id);
    }

    // ✅ Mettre à jour un collaborateur
    public Optional<Collaborator> updateCollaborator(String id, Collaborator updatedCollaborator) {
        return repository.findById(id).map(existingCollaborator -> {
            existingCollaborator.setFirstName(updatedCollaborator.getFirstName());
            existingCollaborator.setLastName(updatedCollaborator.getLastName());
            existingCollaborator.setEmail(updatedCollaborator.getEmail());
            existingCollaborator.setPosition(updatedCollaborator.getPosition());
            return repository.save(existingCollaborator);
        });
    }
}
