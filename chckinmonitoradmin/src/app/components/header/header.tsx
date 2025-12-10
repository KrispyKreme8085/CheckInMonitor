'use client';

import Image from "next/image";
import styles from "./header.module.css";

interface HeaderProps {
    onAddRoomClick: () => void;
}

export default function Header({onAddRoomClick}: HeaderProps) {

    return (
        <div className={styles.header}>
            <div>
                <Image src={"/monitorLogo.png"} width={325} height={100} alt="logo"></Image>
                
                <Image src={"/Add.png"} width={100} height={100} alt="logo" className={styles.addButton} onClick={() => {
                    onAddRoomClick();
                }}/>
            </div>
            <hr />
        </div>
    );
}