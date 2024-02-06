package tconference.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tconference.backend.model.User;
import tconference.backend.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User createUser(User user) {
        // Verifica se o nome de usuário já está em uso
        if (userRepository.findByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Username is already in use.");
        }

        // Verifica se o e-mail já está em uso
        if (userRepository.findByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email is already in use.");
        }
        return userRepository.save(user);
    }

    public User updateUser(Long userId, User updatedUser) {
        User existingUser = userRepository.findById(userId).orElse(null);

        if (existingUser != null) {

            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            return userRepository.save(existingUser);
        }

        return null;
    }

    public boolean deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return false;
    }
}

