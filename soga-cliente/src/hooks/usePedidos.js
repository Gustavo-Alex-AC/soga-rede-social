import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPendingRequests } from "../services/amizadesData";
import { toast } from "react-toastify";

function usePedidos() {
  const { user } = useContext(GlobalContext);
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: pedidos,
    isError,
    error,
  } = useQuery({
    queryKey: ["relacionamentos", user?.id], // Dynamic query key with post.id
    queryFn: () => fetchPendingRequests(user?.id), // Pass post.id to fetchComentarios
    onError: (error) => {
      toast.error(`Error fetching comments: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: (pedidos) => {
      toast.success("Comments fetched successfully!");
      //setPendingRequests(pedidos);
    },
  });
  return { isLoading, pedidos, isError, error, queryClient };
}

export default usePedidos;
