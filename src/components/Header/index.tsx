import logo from "../../assets/Logo 1.png"
import styles from "./styles.module.css"

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <img src={logo} alt="Logo da IN Junior"/>
                <h1>Feed</h1>
            </div>
        </header>
    )
}