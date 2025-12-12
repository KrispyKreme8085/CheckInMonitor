import styles from './addRooms.module.css';
import Textbox from '../textbox/textbox';
import { on } from 'events';

interface AddRoomsProps {
    onAddRoomClick: () => void;
}

export default function AddRooms({onAddRoomClick}: AddRoomsProps) {
    return (
        <div className={styles.addRooms}>
            <div className={styles.body}>
                <h1>Add Room</h1>
                <Textbox placeholder='Room Name'/>
                <Textbox placeholder='Capacity'/>
                <div className={styles.buttonContainer}>
                    <button className={styles.addButton} onClick={() => {
                        onAddRoomClick();
                    }}>Add Room</button>
                    <button className={styles.removeButton} onClick={() => {
                        onAddRoomClick();
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}