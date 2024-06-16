import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Pedido from "./Pedido";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  acceptRequest,
  deleteRequest,
  fetchPendingRequests,
} from "../../services/amizadesData";
import Spinner from "../../ui/Spinner";
import Erro from "../../ui/Erro";

function Pedidos() {
  const { user } = useContext(GlobalContext);
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: pedidos,
    isError,
    error,
  } = useQuery({
    queryKey: ["relacionamentos", user.id], // Dynamic query key with post.id
    queryFn: () => fetchPendingRequests(user.id), // Pass post.id to fetchComentarios
    onError: (error) => {
      toast.error(`Error fetching comments: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: (pedidos) => {
      toast.success("Comments fetched successfully!");
      //setPendingRequests(pedidos);
    },
  });

  const handleAcceptRequest = async (requestId) => {
    await acceptRequest(requestId);
    queryClient.invalidateQueries("relacionamentos");
  };

  const handleDeleteRequest = async (requestId) => {
    await deleteRequest(requestId);
    queryClient.invalidateQueries("relacionamentos");
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div>
        Error loading data:{" "}
        {<Erro mensagem={error.message} /> || <Erro mensagem={error.message} />}
      </div>
    );
  }

  return (
    <>
      {pedidos?.length ? (
        pedidos?.map((pedido) => (
          <Pedido
            pedido={pedido}
            key={pedido.id}
            handleAcceptRequest={handleAcceptRequest}
            handleDeleteRequest={handleDeleteRequest}
          />
        ))
      ) : (
        <h2>Nenhum pedido..</h2>
      )}
    </>
  );
}

export default Pedidos;
