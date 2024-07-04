import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

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
        <sp></sp>
        <NavLink to={"/home"}>
          <AiOutlineHome
            size={26}
            color={location.pathname === "/home" ? "darkblue" : ""}
          />
        </NavLink>
        <NavLink to={`/perfil/${user?.id}`}>
          <FaRegUser
            size={25}
            color={
              location.pathname === `/perfil/${user?.id}` ? "darkblue" : ""
            }
          />
        </NavLink>
        <NavLink to={`/notificacao`}>
          <IoNotificationsOutline
            size={25}
            color={location.pathname === "/notificacao" ? "darkblue" : ""}
          />
        </NavLink>
        <NavLink to={`/mensagem`}>
          <FaRegMessage
            size={25}
            color={location.pathname === "/mensagem" ? "darkblue" : ""}
          />
        </NavLink>
      </div>

      <div className={style.right}>
        <div className={style.user}>
          <NavLink to={`/perfil/${user?.id}`}>
            <img
              src={
                `http://localhost:3000/uploads/${userData?.profile_picture}` ||
                "/uploads/default-profile.jpg"
              }
              alt="user"
            />
          </NavLink>
        </div>

        <IoMoonOutline size={25} />

        <PiSignOutLight size={25} onClick={logout} />
      </div>
    </div>
  );
}

export default NavBar;
