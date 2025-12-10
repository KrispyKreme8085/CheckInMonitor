import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Room from "./components/roomBoxes/room";

interface RoomProps {
  name: string;
  capacity: number;
  currentOccupancy: number;
}

export default function Home() {

  const rooms: RoomProps[] = [
    { name: "Conference Room A", capacity: 20, currentOccupancy: 5 },
    { name: "Meeting Room B", capacity: 15, currentOccupancy: 10 },
    { name: "Lecture Hall C", capacity: 50, currentOccupancy: 25 },
    { name: "Workshop Room D", capacity: 30, currentOccupancy: 15 },
    { name: "Seminar Room E", capacity: 10, currentOccupancy: 2 },
    { name: "Training Room F", capacity: 25, currentOccupancy: 12 },
    { name: "Board Room G", capacity: 12, currentOccupancy: 6 },
    { name: "Breakout Room H", capacity: 8, currentOccupancy: 3 },
    { name: "Collaboration Room I", capacity: 18, currentOccupancy: 9 },
    { name: "Quiet Room J", capacity: 5, currentOccupancy: 1 },
  ];

  return (
    <div className={styles.page}>
      <Header />
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
    </div>
  );
}
