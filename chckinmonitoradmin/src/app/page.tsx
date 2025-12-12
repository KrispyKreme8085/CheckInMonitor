'use client';

import styles from "./page.module.css";
import Header from "./components/header/header";
import Room from "./components/roomBoxes/room";
import AddRooms from "./components/addRooms/addRooms";
import { useState } from "react";

interface RoomProps {
  name: string;
  capacity: number;
  currentOccupancy: number;
}

export default function Home() {

  const rooms: RoomProps[] = [
    { name: "Conference Room A", capacity: 20, currentOccupancy: 5 },
    { name: "Conference Room B", capacity: 25, currentOccupancy: 15 },
    { name: "Conference Room C", capacity: 30, currentOccupancy: 20 },
    { name: "Meeting Room A", capacity: 15, currentOccupancy: 10 },
    { name: "Meeting Room B", capacity: 10, currentOccupancy: 2 },
    { name: "Lecture Hall", capacity: 100, currentOccupancy: 75 },
    { name: "Study Room", capacity: 15, currentOccupancy: 7 },

  ];

  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

  return (
    <div className={styles.page}>
      <Header onAddRoomClick={() => setIsAddRoomVisible(true)} />
      <div className={styles.roomsContainer}>
        {rooms.map((room, index) => (
          <Room
            key={index}
            name={room.name}
            capacity={room.capacity}
            currentOccupancy={room.currentOccupancy}
          />
        ))}
      </div>
      {isAddRoomVisible && <AddRooms onAddRoomClick={() => setIsAddRoomVisible(false)} />}
    </div>
  );
}
