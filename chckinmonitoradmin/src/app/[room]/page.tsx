import styles from "./page.module.css";
import Header from "../components/header/header";
import Textbox from "../components/textbox/textbox";
import Occupants from "../components/occupants/occupants";

interface RoomProps {
  name: string;
  capacity: number;
  currentOccupancy: number;
}

export default async function RoomPage(
    { params }: 
    { 
        params: Promise<{ room: string }> 
    }) {
        
    const { room: roomParam } = await params;

    const rooms: RoomProps[] = [
        { name: "Conference Room A", capacity: 20, currentOccupancy: 5 },
        { name: "Conference Room B", capacity: 25, currentOccupancy: 15 },
        { name: "Conference Room C", capacity: 30, currentOccupancy: 20 },
        { name: "Meeting Room A", capacity: 15, currentOccupancy: 10 },
        { name: "Meeting Room B", capacity: 10, currentOccupancy: 2 },
        { name: "Lecture Hall", capacity: 100, currentOccupancy: 75 },
        { name: "Study Room", capacity: 15, currentOccupancy: 7 },
    ];

    const roomName = decodeURIComponent(roomParam);
    const room = rooms.find(r => r.name.toLowerCase() === roomName.toLowerCase());

    const lastNames = ["Brady", "Nix", "Maye", "Manning", "Stafford", "Rodgers", "Wilson", "Herbert"];

    function generateOccupants() {
        const name = lastNames[Math.floor(Math.random() * lastNames.length)];
        return name;
    }

    return (
        <div>
            <Header isReturn={true}></Header>
            <div className={styles.page}>
                <div className={styles.roomPage}>
                    <h1>{room?.name || "Room not found"}</h1>
                    <Textbox placeholder="Enter New Name"></Textbox>
                    <Textbox placeholder="Enter New Capacity"></Textbox>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="close" />
                        <label htmlFor="close">Close Room</label>                        
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.addButton}>Save Edits</button>
                        <button className={styles.removeButton}>Delete Room</button>
                    </div>
                    <h1>Occupants</h1>
                    <Occupants name={generateOccupants()} groupSize={room!.currentOccupancy}></Occupants>
                </div>
            </div>
        </div>
    );
}