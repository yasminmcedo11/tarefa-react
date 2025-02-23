import CaixaFeedback from "../CaixaFeedback"
import styles from "./styles.module.css"

interface CardProps {
    foto: string
    nome: string
    cargo: string
    publicacao: string
}

export default function Cards(props: CardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <div className={styles.perfil}>
                    <img src={props.foto} alt="Foto de Perfil"/>
                    <div>
                        <h2>{props.nome}</h2>
                        <p>{props.cargo}</p>
                    </div>
                </div>
                <p className={styles.tempo}>Publicado há x horas</p>
            </div>
            <p className={styles.publicacao}>{props.publicacao}</p>
            <CaixaFeedback/>
        </div>
    )
}