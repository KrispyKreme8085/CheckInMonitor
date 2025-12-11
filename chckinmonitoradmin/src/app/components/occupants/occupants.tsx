import styles from "./occupants.module.css";

interface OccupantsProps {
    name: string;
    groupSize: number;
}

export default function Occupants({name, groupSize}: OccupantsProps) {
    return (
        <div className={styles.occupants}>
            <h1>{name}</h1>
            <h1>{groupSize}</h1>
        </div>
    );
}