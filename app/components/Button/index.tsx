import { IconType } from "react-icons";
import styles from "./style.module.css" 

interface IButton {
    Icon: IconType,
    text?: string
}

export default function Button({
    Icon,
    text
}: IButton) {
    return <>
        <button className={styles.button}>
            <Icon />
            {text}
        </button>
    </>
}