import { useState } from "react"
import fotoPerfil from "../../assets/fotoPerfil.png"
import styles from "./styles.module.css"
import { FaRegThumbsUp, FaTrash} from "react-icons/fa"
import useCounter from "../../hooks/useCounter"

interface Comentarios {
    nome: string
    foto: string
    texto: string
    likes: number
}

export default function Comments(props: Comentarios) {
    const [showComment, setComment] = useState(false)
    const [cor, setCor] = useState('#DDDDDD'); 
    const {counter, increment} = useCounter(props.likes)

    const mudarCor = () => {
        setCor(cor === '#DDDDDD' ? "#007DFA" : '#DDDDDD')
    }

    return (
        <div className={styles.general}>
            <div className={styles.container}>
                <img className={styles.fotoPerfil} src={props.foto} alt="foto de Perfil"/>
                <div className={styles.comment}>
                    <div className={styles.info}>
                        <h2>{props.nome}</h2>
                        <p>Cerca de x h</p>
                    </div>
                    <p>{props.texto}</p>
                </div>
            </div>
        <button className={styles.likes}
                style={{ color: cor }} 
                onClick={() => { mudarCor(); increment(); }}
        > 
            <FaRegThumbsUp className={styles.liked}/>  Like • {counter}
        </button>
        </div>
    )
}
