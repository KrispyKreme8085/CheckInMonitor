import styles from "./room.module.css";
import Image from "next/image";

interface RoomProps {
    name: string;
    capacity: number;
    currentOccupancy: number;
}

export default function Room({ name, capacity, currentOccupancy }: RoomProps) {
    return (
        <div className={styles.room}>
            <div>
                <h2>{name}</h2>
                <p>{currentOccupancy} / {capacity}</p>
            </div>
            <Image src={"/more.png"} width={50} height={50} alt="More"></Image>
        </div>
    );
}