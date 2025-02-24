import Cards from "./components/Cards";
import Header from "./components/Header";
import Profile from "./components/Profile";
import fotoPerfil from "./assets/fotoPerfil.png"
import fotoRicardo from "./assets/fotoRicardo.png"
import fotoThais from "./assets/fotoThais.png"
import fotoJessy from "./assets/fotoJessy.png"
import fotoFelipe from "./assets/fotoFelipe.png"

interface Comentario {
  nome: string
  foto: string
  texto: string
  likes: number
}
interface Post {
  nome: string
  cargo: string
  foto: string
  publicacao: string
  id: number
  comentarios: Comentario[]
}

export default function App() {
  const posts: Post[] = [
    {
      nome: "Thais Gomes",
      cargo: "Designer",
      foto: fotoThais,
      publicacao: "Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
      id: 1,
      comentarios: []
    },
    {
      nome: "Ricardo Siqueira",
      cargo: "Dev Backend",
      foto: fotoRicardo,
      publicacao: "Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
      id: 2,
      comentarios: [
        {
         nome: "Felyppe Nunes",
         texto: "Est aspernatur quis eos natus dicta et internos",
         likes: 2,
         foto: fotoFelipe
        },
        {
         nome: "Mellany Carter",
         texto: "Est aspernatur quis eos natus dicta et internos",
         likes: 3,
         foto: fotoJessy
        }]
    },
  ];
  return (
    <>
      <Header/>
      <main>
        <Profile/>
        <div>
          {posts.map((post) =>(
            <Cards 
              foto={post.foto}
              nome={post.nome}
              cargo={post.cargo}
              publicacao={post.publicacao}
              comentarios={post.comentarios}
              key={post.id}
            />
          ))}
        </div>
      </main>
    </>
  )
}


