import NavBar from "../componentes/navBar/NavBar";
import LeftBar from "../componentes/leftBar/LeftBar";
import RightBar from "../componentes/rightBar/RightBar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          padding: "0 20px",
        }}
      >
        <LeftBar />
        <div
          style={{ flex: 6, backgroundColor: "#f9fafb", marginRight: "20px" }}
        >
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default AppLayout;
