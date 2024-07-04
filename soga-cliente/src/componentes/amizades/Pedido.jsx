import style from "./Pedido.module.css";
function Pedido({ pedido, handleAcceptRequest, handleDeleteRequest }) {
  function handleConfirmar() {
    handleAcceptRequest(pedido.id);
  }
  function handleEliminar() {
    handleDeleteRequest(pedido.id);
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
