import Pedido from "./Pedido";
import { acceptRequest, deleteRequest } from "../../services/amizadesData";
import Spinner from "../../ui/Spinner";
import Erro from "../../ui/Erro";
import usePedidos from "../../hooks/usePedidos";

function Pedidos() {
  const { isError, isLoading, error, pedidos, queryClient } = usePedidos();

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
        <p style={{ marginTop: "10px", color: "gray" }}>Nenhum pedido...</p>
      )}
    </>
  );
}

export default Pedidos;
