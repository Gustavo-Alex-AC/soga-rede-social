import { LiaUserFriendsSolid } from "react-icons/lia";
import style from "./LeftBar.module.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineEventNote, MdOutlineGroups } from "react-icons/md";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";

function LeftBar() {
  const { userData } = useContext(UserDataContext);

  return (
    <div className={style.leftBar}>
      <div className={style.continer}>
        <div className={style.menu}>
          <div className={style.user}>
            <img src={userData?.profile_picture} alt="user" />
            <span>{userData?.nome}</span>
          </div>
          <div className={style.item}>
            <LiaUserFriendsSolid size={30} />
            <span>Amizades</span>
          </div>
          <div className={style.item}>
            <FaRegNewspaper size={30} />
            <span>Última notícias</span>
          </div>
          <div className={style.item}>
            <MdOutlineGroups size={30} />
            <span>Grupos</span>
          </div>
          <div className={style.item}>
            <MdOutlineEventNote size={30} />
            <span>Eventos</span>
          </div>
          <div className={style.item}>
            <IoNotificationsOutline size={30} />
            <span>Notificações</span>
          </div>
          <div className={style.item}>
            <IoSettingsOutline size={30} />
            <span>Definições</span>
          </div>
        </div>
        {/* <hr />
        <div className={style.menu}>
          <span>Your shortcuts</span>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Events</span>
          </div>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Gaming</span>
          </div>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Gallery</span>
          </div>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Videos</span>
          </div>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className={style.menu}>
          <span>Others</span>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Tutorials</span>
          </div>
          <div className={style.item}>
            <img src="" alt="" />
            <span>Courses</span>
          </div>  </div>*/}
      </div>
    </div>
  );
}

export default LeftBar;
