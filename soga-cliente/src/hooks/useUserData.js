import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/userData";
import { toast } from "react-toastify";

export function useUserData() {
  const {
    isLoading,
    data: usersData,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onError: (error) => {
      toast.error(`Error fetching home page data: ${error.message}`);
      console.error("Error details:", error); // Optional for logging detailed errors
    },
    onSuccess: () => {
      toast.success("Home page data fetched successfully!");
    },
  });
  return { isLoading, usersData, isError, error };
}

export default useUserData;
