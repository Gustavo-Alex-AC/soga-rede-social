import { LiaUserFriendsSolid } from "react-icons/lia";
import style from "./Compartilhar.module.css";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";

function Compartilhar() {
  return (
    <div className={style.share}>
      <div className={style.container}>
        <div className={style.top}>
          <img
            src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
            alt="user"
          />
          <input type="text" placeholder={`O que estás a pensar Paula Alex?`} />
        </div>
        <hr />
        <div className={style.bottom}>
          <div className={style.left}>
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className={style.item}>
                <IoImageOutline size={22} />
                <span>Imagem</span>
              </div>
            </label>
            <div className={style.item}>
              <HiOutlineMapPin size={22} />
              <span>Localização</span>
            </div>
            <div className={style.item}>
              <LiaUserFriendsSolid size={22} />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className={style.right}>
            <button>Partilhar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compartilhar;
