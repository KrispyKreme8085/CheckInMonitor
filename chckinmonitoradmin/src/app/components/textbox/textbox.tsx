import styles from './textbox.module.css';

interface TextboxProps {
    placeholder: string;
}

export default function Textbox({placeholder}: TextboxProps) {
    return (
        <div className={styles.textboxContainer}>
            <input type="text" placeholder={placeholder} className={styles.textbox} />
        </div>
    );
}
