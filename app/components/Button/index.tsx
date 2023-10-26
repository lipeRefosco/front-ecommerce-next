import { IconType } from "react-icons";
import styles from "./style.module.css" 

interface IButton {
    Icon: IconType,
    text?: string,
    style: "filled" | "outlined" | ""
}

export default function Button({
    Icon,
    text,
    style
}: IButton) {
    return <>
        <button className={`${styles.button} ${styles[style]}`}>
            <Icon />
            {text}
        </button>
    </>
}