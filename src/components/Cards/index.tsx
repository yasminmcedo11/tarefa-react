import { useState } from "react"
import CaixaFeedback from "../CaixaFeedback"
import Comments from "../Comments"
import styles from "./styles.module.css"

interface Comentario {
    nome: string
    foto: string
    texto: string
    likes: number
}
interface CardProps {
    foto: string
    nome: string
    cargo: string
    publicacao: string
    key: number
    comentarios: Comentario[]
    adicionarComentario: (comentario: Comentario) => void;
}

function showComments(props: CardProps) : boolean{
    if ((props.comentarios).length === 0) {
        return true
    }
    else {
        return false
    }
}

export default function Cards(props: CardProps) {
    const [comentarios, setComentarios] = useState<any[]>([])

    function adicionarComentario(novoComentario: { id: number; nome: string; texto: string; likes: number; foto: string }) {
        setComentarios(prevComentarios => [...prevComentarios, novoComentario]);
    }

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
            <CaixaFeedback {...props}/>
            {Array.isArray(props.comentarios) && props.comentarios.length > 0 && (
                (props.comentarios).map((comentario) => (
                    <Comments 
                        nome={comentario.nome} 
                        texto={comentario.texto} 
                        likes={comentario.likes} 
                        foto={comentario.foto}
                    />
                ))
            )}
        </div>
    )
}