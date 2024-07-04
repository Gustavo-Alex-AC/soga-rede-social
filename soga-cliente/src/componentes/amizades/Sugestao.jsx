import { useContext } from "react";
import style from "./Sugestao.module.css";
import GlobalContext from "../../context/GlobalContext";
function Sugestao({ data, handleSendRequest, handleDeleteRequest }) {
  const { user } = useContext(GlobalContext);

  function handleConfirmar() {
    handleSendRequest(user.id, data.id);
    alert("Pedido enviado");
  }
  //   function handleEliminar() {
  //     handleDeleteRequest(data.id);
  //   }

  return (
    <>
      <div className={style.user}>
        <div className={style.userInfo}>
          <img
            src={
              `http://localhost:3000/uploads/${data?.profile_picture}` ||
              "/uploads/default-profile.jpg"
            }
            alt=""
          />
          <span>{data?.nome}</span>
        </div>
        <div className={style.buttons}>
          <button onClick={handleConfirmar}>Pedir Amizade</button>
          {/* <button onClick={handleEliminar}>Eliminar</button> */}
        </div>
      </div>
    </>
  );
}

export default Sugestao;
