import { useContext } from "react";
import { acceptRequest, deletefriend } from "../../services/amizadesData";
import style from "./Amizade.module.css";
import GlobalContext from "../../context/GlobalContext";

function Amizade({ data, queryClient }) {
  const { user } = useContext(GlobalContext);

  async function handleDelete() {
    await deletefriend(user.id, data.id);
    queryClient.invalidateQueries("relacionamentos/delelefriend");
  }

  async function handleAccept() {
    await acceptRequest(data.id);
    queryClient.invalidateQueries("relacionamentos/accept");
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
