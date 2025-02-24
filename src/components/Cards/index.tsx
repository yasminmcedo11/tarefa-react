import CaixaFeedback from "../CaixaFeedback"
import Comments from "../Comments"
import styles from "./styles.module.css"
import Time from "../Time"

interface Comentario {
    nome: string
    foto: string
    texto: string
    likes: number
    id: number
}
interface CardProps {
    foto: string
    nome: string
    cargo: string
    publicacao: string
    key: number
    comentarios: Comentario[]
}


export default function Cards(props: CardProps) {
    const dataDePublicacao = new Date()
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
                <Time publicacaoData={dataDePublicacao}/>
            </div>
            <p className={styles.publicacao}>{props.publicacao}</p>
            <CaixaFeedback/>
            {Array.isArray(props.comentarios) && props.comentarios.length > 0 && (
                (props.comentarios).map((comentario) => (
                    <Comments 
                        nome={comentario.nome} 
                        texto={comentario.texto} 
                        likes={comentario.likes} 
                        foto={comentario.foto}
                        id={comentario.id}
                    />
                ))
            )}
        </div>
    )
}