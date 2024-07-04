import style from "./Amizade.module.css";

function Amizade({ data, handleDeleteRequest, handleAcceptRequest, pedido }) {
  function handleDelete() {
    handleDeleteRequest(data.id);
  }
  function handleAccept() {
    handleAcceptRequest(data.id);
  }

  return (
    <div className={style.user}>
      <div className={style.userInfo}>
        <img
          src={
            `http://localhost:3000/uploads/${
              data?.profile_picture || data?.user.profile_picture
            }` || "/uploads/default-profile.jpg"
          }
          alt=""
        />
      </div>
      <div className={style.cardItem}>
        <span>{data?.nome || data?.user.nome}</span>
        <div className={style.buttons}>
          {data.status ? (
            <button className={style.buttonActive} onClick={handleAccept}>
              Confirmar
            </button>
          ) : (
            ""
          )}
          <button
            className={data.status ? style.button : style.buttonActive}
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Amizade;
