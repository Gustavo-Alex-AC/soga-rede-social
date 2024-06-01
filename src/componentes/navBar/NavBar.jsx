import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

import { ImSearch } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { IoMoonOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegMessage, FaRegUser } from "react-icons/fa6";
import { PiSignOutLight } from "react-icons/pi";

function NavBar() {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "1.8rem" }}>SOGA</span>
        </Link>
        {/* {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )} */}
        {/* <GridViewOutlinedIcon /> */}
        <div className={style.search}>
          <ImSearch size={20} />
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </div>

      <div className={style.middle}>
        <AiOutlineHome size={25} />
        <FaRegUser size={25} />
        <IoNotificationsOutline size={25} />
        <FaRegMessage size={25} />
      </div>

      <div className={style.right}>
        <div className={style.user}>
          <img
            src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
            alt="user"
          />
          {/* <span>Paula Alex</span> */}
        </div>

        <IoMoonOutline size={25} />
        {/* <IoMoonSharp /> */}
        <PiSignOutLight size={25} />
      </div>
    </div>
  );
}

export default NavBar;
