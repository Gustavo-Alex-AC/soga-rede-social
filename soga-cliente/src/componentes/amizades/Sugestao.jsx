import { useContext, useState } from "react";
import style from "./Sugestao.module.css";
import GlobalContext from "../../context/GlobalContext";
import { sendRequest } from "../../services/amizadesData";

function Sugestao({ data, queryClient }) {
  const { user } = useContext(GlobalContext);
  const [display, setDisplay] = useState(false);

  const handleSendRequest = async () => {
    await sendRequest(user.id, data.id);
    setDisplay((s) => !s);
    queryClient.invalidateQueries("relacionamentos/send");
  };

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
        <div className={`${display ? style.disable : style.buttons}`}>
          <button onClick={handleSendRequest} disabled={display}>
            {display ? "Pedido enviado" : "Pedir Amizade"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sugestao;
