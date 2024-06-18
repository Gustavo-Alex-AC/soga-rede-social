import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function usePosts(fetcher) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetcher,
    onError: (error) => {
      toast.error(`Error fetching Posts data: ${error.message}`);
      console.error("Error details:", error); // Optional for logging detailed errors
    },
    onSuccess: () => {
      toast.success("Posts fetched successfully!");
      //   const sortedPosts = postsData.sort(
      //     (a, b) => new Date(b.id) - new Date(a.id)
      //   );
      //   setPostById(sortedPosts.filter((post) => post.user_id === userData.id));
    },
  });

  return { isLoading, data, isError, error };
}
