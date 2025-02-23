import styles from "./styles.module.css"

export default function CaixaFeedback() {
    return (
        <div className={styles.feedback}>
            <p>Deixe seu feedback</p>
            <textarea placeholder="Escreva um comentário..." required></textarea> 
            <button>Comentar</button>
        </div>
    )
}