import styles from './addRooms.module.css';
import Textbox from '../textbox/textbox';

export default function AddRooms() {
    return (
        <div className={styles.addRooms}>
            <div className={styles.body}>
                <h1>Add Room</h1>
                <Textbox placeholder='Room Name'/>
                <Textbox placeholder='Capacity'/>
                <div className={styles.buttonContainer}>
                    <button className={styles.addButton}>Add Room</button>
                    <button className={styles.removeButton}>Cancel</button>
                </div>
            </div>
        </div>
    );
}