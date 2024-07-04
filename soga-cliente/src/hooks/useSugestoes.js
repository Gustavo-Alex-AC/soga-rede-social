import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSuggestionRequests } from "../services/amizadesData";
import { toast } from "react-toastify";

function useSugestoes() {
  const { user } = useContext(GlobalContext);
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: sugestoes,
    isError,
    error,
  } = useQuery({
    queryKey: ["relacionamentos/suggestions", user.id],
    queryFn: () => fetchSuggestionRequests(user.id),
    onError: (error) => {
      toast.error(`Error fetching sugestoes: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: (sugestoes) => {
      toast.success("Comments fetched successfully!");
      //setPendingRequests(pedidos);
    },
  });
  return { isLoading, sugestoes, isError, error, queryClient };
}

export default useSugestoes;
