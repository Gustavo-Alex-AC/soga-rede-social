import { acceptRequest, deleteRequest } from "../../services/amizadesData";
import style from "./Pedido.module.css";
function Pedido({ pedido, queryClient }) {
  async function handleConfirmar() {
    await acceptRequest(pedido.id);
    queryClient.invalidateQueries("relacionamentos/accept");
  }

  async function handleEliminar() {
    await deleteRequest(pedido.id);
    queryClient.invalidateQueries("relacionamentos/delete");
  }

  return (
    <>
      <div className={style.user}>
        <div className={style.userInfo}>
          <img
            src={
              `http://localhost:3000/uploads/${pedido?.user?.profile_picture}` ||
              "/uploads/default-profile.jpg"
            }
            alt=""
          />
          <span>{pedido?.user?.nome}</span>
        </div>
        <div className={style.buttons}>
          <button onClick={handleConfirmar}>Confirmar</button>
          <button onClick={handleEliminar}>Eliminar</button>
        </div>
      </div>
    </>
  );
}

export default Pedido;
