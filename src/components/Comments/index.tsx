import { useState } from "react"
import styles from "./styles.module.css"
import { FaRegThumbsUp, FaRegTrashAlt} from "react-icons/fa"
import useCounter from "../../hooks/useCounter"
import Time from "../Time"
interface Comentarios {
    nome: string
    foto: string
    texto: string
    likes: number
    id: number
}

export default function Comments(props: Comentarios) {
    const [cor, setCor] = useState('#DDDDDD'); 
    const {counter, increment} = useCounter(props.likes)
    const [isVisible, setIsVisible] = useState(true)
    const dataDePublicacao = new Date()

    const mudarCor = () => {
        setCor(cor === '#DDDDDD' ? "#007DFA" : '#DDDDDD')
    }

    const handleDelete = () => {
        setIsVisible(false)
    }

    if (!isVisible) {
        return null
    }

    return (
        <div className={styles.general}>
            <div className={styles.container}>
                <img className={styles.fotoPerfil} src={props.foto} alt="foto de Perfil"/>
                <div className={styles.comment}>
                    <div className={styles.estrutura}>
                        <div className={styles.info}>
                            <h2>{props.nome}</h2>
                            <Time publicacaoData={dataDePublicacao}/>
                        </div>
                        <button className={styles.deleteButton}
                                onClick={handleDelete}>
                            <FaRegTrashAlt className={styles.trash}/>
                        </button>
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
