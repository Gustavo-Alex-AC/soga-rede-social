import { LiaUserFriendsSolid } from "react-icons/lia";
import style from "./LeftBar.module.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineEventNote, MdOutlineGroups } from "react-icons/md";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

function LeftBar() {
  const { user } = useContext(GlobalContext);
  const { userData } = useContext(UserDataContext);

  return (
    <div className={style.leftBar}>
      <div className={style.continer}>
        <div className={style.menu}>
          <Link to={`/perfil/${user?.id}`}>
            <div className={style.user}>
              <img src={userData?.profile_picture} alt="user" />
              <span>{userData?.nome}</span>
            </div>
          </Link>
          <Link to={`/amizades`}>
            <div className={style.item}>
              <LiaUserFriendsSolid size={30} />
              <span>Amizades</span>
            </div>
          </Link>
          <Link to={`/noticias`}>
            <div className={style.item}>
              <FaRegNewspaper size={30} />
              <span>Última notícias</span>
            </div>
          </Link>
          <Link to={`/grupos`}>
            <div className={style.item}>
              <MdOutlineGroups size={30} />
              <span>Grupos</span>
            </div>
          </Link>
          <Link to={`/eventos`}>
            <div className={style.item}>
              <MdOutlineEventNote size={30} />
              <span>Eventos</span>
            </div>
          </Link>
          <Link to={`/notificacao`}>
            <div className={style.item}>
              <IoNotificationsOutline size={30} />
              <span>Notificações</span>
            </div>
          </Link>
          <Link to={`/definicoes`}>
            <div className={style.item}>
              <IoSettingsOutline size={30} />
              <span>Definições</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
