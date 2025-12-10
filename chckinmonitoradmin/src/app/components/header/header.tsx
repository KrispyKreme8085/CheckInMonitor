import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                <Image src={"/monitorLogo.png"} width={325} height={100} alt="logo"></Image>
                <Image src={"/Add.png"} width={100} height={100} alt="logo"></Image>
            </div>
            <hr />
        </div>
    );
}