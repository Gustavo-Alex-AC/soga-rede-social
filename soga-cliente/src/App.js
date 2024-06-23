import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import Mensagem from "./componentes/mensagem/Mensagem.jsx";
import Amizades from "./componentes/amizades/Amizades.jsx";
import Club from "./componentes/clubs/Club.jsx";
import Definicoes from "./componentes/definicoes/Definicoes.jsx";
import Evento from "./componentes/eventos/Evento.jsx";
import Notificacao from "./componentes/notificacao/Notificacao.jsx";
import Noticias from "./componentes/noticias/Noticias.jsx";
import BoasVindas from "./paginas/boasvindas/BoasVindas.jsx";
import Atualizar from "./paginas/atualizarPerfil/Atualizar.jsx";

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
    { path: "/", element: <BoasVindas /> },
    { path: "/login", element: <Login /> },
    { path: "/registrar", element: <Registrar /> },
    { path: "/atualizar", element: <Atualizar /> },
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
        {
          path: "/mensagem",
          element: (
            <RotaProtegida>
              <Mensagem />
            </RotaProtegida>
          ),
        },
        {
          path: "/amizades",
          element: (
            <RotaProtegida>
              <Amizades />
            </RotaProtegida>
          ),
        },
        {
          path: "/grupos",
          element: (
            <RotaProtegida>
              <Club />
            </RotaProtegida>
          ),
        },
        {
          path: "/definicoes",
          element: (
            <RotaProtegida>
              <Definicoes />
            </RotaProtegida>
          ),
        },
        {
          path: "/eventos",
          element: (
            <RotaProtegida>
              <Evento />
            </RotaProtegida>
          ),
        },
        {
          path: "/notificacao",
          element: (
            <RotaProtegida>
              <Notificacao />
            </RotaProtegida>
          ),
        },
        {
          path: "/noticias",
          element: (
            <RotaProtegida>
              <Noticias />
            </RotaProtegida>
          ),
        },
      ],
    },
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
