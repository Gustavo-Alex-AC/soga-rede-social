import { deleteRequest, sendRequest } from "../../services/amizadesData";
import Spinner from "../../ui/Spinner";
import Erro from "../../ui/Erro";
import useSugestoes from "../../hooks/useSugestoes";
import Sugestao from "./Sugestao";

function Sugestoes() {
  const { isError, isLoading, error, sugestoes, queryClient } = useSugestoes();

  console.log("sugestoes:", sugestoes);

  const handleSendRequest = async (requestId, relacaoId) => {
    await sendRequest(requestId, relacaoId);
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
      {sugestoes?.length ? (
        sugestoes?.map((sugestao) => (
          <Sugestao
            data={sugestao}
            key={sugestao.id}
            handleSendRequest={handleSendRequest}
            handleDeleteRequest={handleDeleteRequest}
          />
        ))
      ) : (
        <p
          style={{
            marginTop: "10px",
            color: "gray",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          Nenhuma sugestão...
        </p>
      )}
    </>
  );
}

export default Sugestoes;
