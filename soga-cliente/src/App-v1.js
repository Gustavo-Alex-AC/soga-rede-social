import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Exemplo from "./componentes/exemplo/Exemplo.jsx";
import Login from "./paginas/login/Login.jsx";
import Registrar from "./paginas/registrar/Registrar.jsx";
import Home from "./paginas/home/Home.jsx";
import Perfil from "./paginas/perfil/Perfil-v1.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Erro from "./ui/Erro.jsx";

function App() {
  const router = createBrowserRouter([
    // { path: "/", element: <Exemplo /> },
    {
      element: <AppLayout />,
      errorElement: <Erro />,

      children: [
        {
          path: "/home",
          element: <Home />,
        },
        { path: "/perfil/:userId", element: <Perfil /> },
      ],
    },
    { path: "/login", element: <Login /> },
    {
      path: "/registrar",
      element: <Registrar />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
