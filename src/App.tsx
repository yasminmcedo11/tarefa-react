import Cards from "./components/Cards";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import fotoPerfil from "./assets/fotoPerfil.png"

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Perfil/>
        <Cards foto={fotoPerfil} nome="Yasmin Macedo" cargo="dev front end" publicacao="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate 
        nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum 
        sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus 
        sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"/>
      </main>
    </>
  )
}


