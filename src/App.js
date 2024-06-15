import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Exemplo from "./componentes/exemplo/Exemplo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./paginas/login/Login";
import Registrar from "./paginas/registrar/Registrar";
import Home from "./paginas/home/Home.jsx";
import Perfil from "./paginas/perfil/Perfil.jsx";
import AppLayout from "./ui/AppLayout";
import Erro from "./ui/Erro";
import RotaProtegida from "./componentes/rotaProtegida/RotaProtegida.jsx";
import { GlobalProvider } from "./context/GlobalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserDataProvider } from "./context/UserDataContext.js";

//setting up react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Exemplo /> },
    {
      element: <AppLayout />,
      errorElement: <Erro />,
      children: [
        {
          path: "/home",
          element: (
            <RotaProtegida>
              <Home />
            </RotaProtegida>
          ),
        },
        {
          path: "/perfil/:userId",
          element: (
            <RotaProtegida>
              <Perfil />
            </RotaProtegida>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/registrar", element: <Registrar /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalProvider>
        <UserDataProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </UserDataProvider>
      </GlobalProvider>
    </QueryClientProvider>
  );
}

export default App;

//npm i @tanstack/react-query@4
//npm i @tanstack/react-query-devtools
//npm i react-hot-toast : notifications
//npm i react-hook-form@7 : for handle send form to server(supabase)
