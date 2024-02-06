package tconference.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tconference.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean findByUsername(String username);
    boolean findByEmail(String email);
}

