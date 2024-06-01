import Compartilhar from "../../componentes/compartilhar/Compartilhar";
import Posts from "../../componentes/posts/Posts";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <Compartilhar />
      <Posts />
    </div>
  );
}

export default Home;
