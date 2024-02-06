package tconference.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import tconference.backend.model.Reservation;
import tconference.backend.model.Room;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByRoom(Room room);

    List<Reservation> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);

}

