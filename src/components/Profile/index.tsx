import fotoPerfil from "../../assets/fotoPerfil.png"
import fotoFundo from "../../assets/fotoCapa.png"
import styles from "./styles.module.css"

export default function Perfil() {
    return (
        <div className={styles.container}>
            <div className={styles.capa}>
                <img src={fotoFundo} alt="foto de Capa"/>
            </div>
            <img className={styles.fotoPerfil} src={fotoPerfil} alt="foto de Perfil"/>
            <div className={styles.apresentacao}>
                <h1>Yasmin Macedo</h1>
                <p>Dev Front-end</p>
            </div>
        </div>
    )
}
