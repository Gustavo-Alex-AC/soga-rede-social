//import { useNavigate } from "react-router";
import style from "./Contacto.module.css";

function Contacto({ contacto }) {
  //const navigate = useNavigate();

  //   function handleClick() {
  //     navigate(`/perfil/${contacto?.id}`);
  //   }

  return (
    <div className={style.user}>
      <div className={style.userInfo}>
        <img
          src={
            `http://localhost:3000/uploads/${contacto?.profile_picture}` ||
            "/uploads/default-profile.jpg"
          }
          alt=""
        />
        <div className={style.online} />
        <span>{contacto?.nome}</span>
      </div>
    </div>
  );
}

export default Contacto;
