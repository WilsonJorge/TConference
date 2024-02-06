package tconference.backend.model;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Room room;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    public Reservation() {

    }

    public Reservation(Room room, LocalDateTime startTime, LocalDateTime endTime,User user) {
        this.room = room;
        this.startTime = startTime;
        this.endTime = endTime;
        this.user = user;
    }

    public  LocalDateTime getStartTime(){
        return startTime;

    }

    public  void setStartTime(LocalDateTime startTime){
        this.startTime = startTime;
    }
    public  LocalDateTime getEndTime(){
        return endTime;
    }
    public  void setEndTime(LocalDateTime endTime){
        this.endTime = endTime;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}


