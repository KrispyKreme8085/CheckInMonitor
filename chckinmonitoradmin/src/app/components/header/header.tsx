'use client';

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

interface HeaderProps {
    onAddRoomClick?: () => void;
    isReturn?: boolean;
}

export default function Header({onAddRoomClick, isReturn}: HeaderProps) {

    return (
        <div className={styles.header}>
            <div>
                <Image src={"/monitorLogo.png"} width={325} height={100} alt="logo"></Image>
                
                {isReturn ? 
                <Link href={"/"} className={styles.goHome}><p>Go Home</p></Link>
                : 
                <Image src={"/Add.png"} width={100} height={100} alt="logo" className={styles.addButton} onClick={() => {
                    onAddRoomClick!();
                }}/>}
            </div>
            <hr />
        </div>
    );
}