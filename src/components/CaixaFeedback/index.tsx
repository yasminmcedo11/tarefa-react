import { useState } from "react";
import styles from "./styles.module.css"
import fotoPerfil from "../../assets/fotoPerfil.png"
import Comments from "../Comments";

interface Comentario {
    nome: string
    foto: string
    texto: string
    likes: number
    id: number
  }


export default function CaixaFeedback() {
    const [comentario, setComentario] = useState("")
    const [comentarios, setComentarios] = useState<Comentario[]>([])
    const [comentarioAdicionado, setComentarioAdicionado] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComentario(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const novoComentario: Comentario = {
            nome: "Yasmin Macedo", 
            texto: comentario, 
            likes: 0, 
            foto: fotoPerfil, 
            id: Date.now()
        }
        setComentarios(prevComentarios => [...prevComentarios, novoComentario])
        setComentarioAdicionado(true)
        setComentario("")
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
            {comentarioAdicionado && comentarios.length > 0 && (
                <Comments
                    key={comentarios[comentarios.length - 1].id} // Usando a chave única do último comentário
                    nome={comentarios[comentarios.length - 1].nome} // Nome do último comentário
                    texto={comentarios[comentarios.length - 1].texto} // Texto do último comentário
                    likes={comentarios[comentarios.length - 1].likes} // Likes do último comentário
                    foto={comentarios[comentarios.length - 1].foto} // Foto do último comentário
                    id={comentarios[comentarios.length - 1].id} // ID do último comentário
                />
            )}
        </form>
    )
}