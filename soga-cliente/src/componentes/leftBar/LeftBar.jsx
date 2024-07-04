import { LiaUserFriendsSolid } from "react-icons/lia";
import style from "./LeftBar.module.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineEventNote, MdOutlineGroups } from "react-icons/md";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import { Link, useLocation } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

function LeftBar() {
  const { user } = useContext(GlobalContext);
  const { userData } = useContext(UserDataContext);
  const location = useLocation();

  return (
    <div className={style.leftBar}>
      <div className={style.continer}>
        <div className={style.menu}>
          <Link to={`/perfil/${user?.id}`}>
            <div className={style.user}>
              <img
                src={
                  `http://localhost:3000/uploads/${userData?.profile_picture}` ||
                  "/uploads/default-profile.jpg"
                }
                alt="user"
              />
              <span>{userData?.nome}</span>
            </div>
          </Link>
          <Link to={`/amizades`}>
            <div className={style.item}>
              <LiaUserFriendsSolid
                size={30}
                color={location.pathname === "/amizades" ? "darkblue" : ""}
              />
              <span>Amizades</span>
            </div>
          </Link>
          <Link to={`/noticias`}>
            <div className={style.item}>
              <FaRegNewspaper
                size={30}
                color={location.pathname === "/noticias" ? "darkblue" : ""}
              />
              <span>Última notícias</span>
            </div>
          </Link>
          <Link to={`/grupos`}>
            <div className={style.item}>
              <MdOutlineGroups
                size={30}
                color={location.pathname === "/grupos" ? "darkblue" : ""}
              />
              <span>Grupos</span>
            </div>
          </Link>
          <Link to={`/eventos`}>
            <div className={style.item}>
              <MdOutlineEventNote
                size={30}
                color={location.pathname === "/eventos" ? "darkblue" : ""}
              />
              <span>Eventos</span>
            </div>
          </Link>
          <Link to={`/notificacao`}>
            <div className={style.item}>
              <IoNotificationsOutline
                size={30}
                color={location.pathname === "/notificacao" ? "darkblue" : ""}
              />
              <span>Notificações</span>
            </div>
          </Link>
          <Link to={`/definicoes`}>
            <div className={style.item}>
              <IoSettingsOutline
                size={30}
                color={location.pathname === "/definicoes" ? "darkblue" : ""}
              />
              <span>Definições</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
