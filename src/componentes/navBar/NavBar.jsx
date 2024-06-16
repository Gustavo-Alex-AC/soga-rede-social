import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

import { ImSearch } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { IoMoonOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegMessage, FaRegUser } from "react-icons/fa6";
import { PiSignOutLight } from "react-icons/pi";
import { useContext } from "react";

import UserDataContext from "../../context/UserDataContext";
import GlobalContext from "../../context/GlobalContext";

function NavBar() {
  const { userData } = useContext(UserDataContext);
  const { user, setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  function logout() {
    if (user) {
      setUser(null);
      navigate("/login");
    }
    // console.log("Logout...:", user);
  }

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
        <NavLink to={"/home"}>
          <AiOutlineHome size={25} />
        </NavLink>
        <NavLink to={`/perfil/${user.id}`}>
          <FaRegUser size={25} />
        </NavLink>
        <NavLink to={`/notificacao`}>
          <IoNotificationsOutline size={25} />
        </NavLink>
        <NavLink to={`/mensagem`}>
          <FaRegMessage size={25} />
        </NavLink>
      </div>

      <div className={style.right}>
        <div className={style.user}>
          <NavLink to={`/perfil/${user.id}`}>
            <img src={userData?.profile_picture} alt="user" />
          </NavLink>
        </div>

        <IoMoonOutline size={25} />

        <PiSignOutLight size={25} onClick={logout} />
      </div>
    </div>
  );
}

export default NavBar;
