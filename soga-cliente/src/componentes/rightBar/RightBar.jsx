import Pedidos from "../amizades/Pedidos";
import Contactos from "./Contactos";
import style from "./RightBar.module.css";

function RightBar() {
  return (
    <div className={style.rightBar}>
      <div className={style.container}>
        <div className={style.item}>
          <span>Pedidos de amizades</span>
          <Pedidos />
        </div>

        <div className={style.item}>
          <span>Contactos</span>

          <Contactos />
        </div>
      </div>
    </div>
  );
}

export default RightBar;
