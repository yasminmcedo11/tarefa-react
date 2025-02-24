import { useState } from "react";
import styles from "./styles.module.css"
import fotoPerfil from "../../assets/fotoPerfil.png"

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



export default function CaixaFeedback(props: CardProps) {
    const [comentario, setComentario] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComentario(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const novoComentario: Comentario = {
            nome: "Yasmin Macedo", // Nome fixo para o usuário
            texto: comentario, // O texto da textarea
            likes: 0, 
            foto: fotoPerfil, // A foto do perfil (se aplicável)
        }
    
        props.adicionarComentario(novoComentario)
        setComentario("");
    }

    return (
        <form className={styles.feedback} onSubmit={handleSubmit}>
            <p>Deixe seu feedback</p>
            <textarea 
                value={comentario}
                onChange={handleChange}
                placeholder="Escreva um comentário..." required>
            </textarea> 
            <button className={styles.comentar} type="submit" >Comentar</button>
        </form>
    )
}