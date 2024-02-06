package tconference.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tconference.backend.model.Room;
import tconference.backend.repository.RoomRepository;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room createRoom(Room room) {
        // Verifica se já existe uma sala com o mesmo nome
        if (roomRepository.existsByName(room.getName())) {
            throw new IllegalArgumentException("There is already a room with the same name.");
        }
        return roomRepository.save(room);
    }


    public Room getRoomById(Long roomId) {
        return roomRepository.findById(roomId).orElse(null);
    }

    public Room updateRoom(Long roomId, Room updatedRoom) {
        Room existingRoom = roomRepository.findById(roomId).orElse(null);

        if (existingRoom != null) {

            if (!existingRoom.getId().equals(updatedRoom.getId())
                    && roomRepository.existsById(updatedRoom.getId())) {
                throw new IllegalArgumentException("There is already a room with the same name.");
            }


            existingRoom.setName(updatedRoom.getName());
            existingRoom.setCapacity(updatedRoom.getCapacity());
            existingRoom.setStatus(updatedRoom.getStatus());

            return roomRepository.save(existingRoom);
        } else {
            throw new IllegalArgumentException("Room not found.");
        }
    }

    public boolean deleteRoom(Long roomId) {
        if (roomRepository.existsById(roomId)) {
            roomRepository.deleteById(roomId);
            return true;
        } else {
            return false;
        }
    }


}

