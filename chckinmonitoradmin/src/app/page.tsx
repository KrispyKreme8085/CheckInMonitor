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

  

  return (
    <div className={styles.page}>
      <Header />
      <div>
        <Room name="Conference Room A" capacity={20} currentOccupancy={5} />
      </div>
    </div>
  );
}
