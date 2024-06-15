import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Exemplo from "./componentes/Exemplo/Exemplo";
import Mensagem from "./componentes/mensagem/Mensagem";
import Login from "./paginas/login/Login";
import Registrar from "./paginas/registrar/Registrar";
import Home from "./paginas/home/Home.jsx";
import Perfil from "./paginas/perfil/Perfil.jsx";
import AppLayout from "./ui/AppLayout";
import Erro from "./ui/Erro";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Exemplo /> },
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
    { path: "/mensagem", element: <Mensagem /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
