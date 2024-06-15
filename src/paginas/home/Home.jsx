import Compartilhar from "../../componentes/compartilhar/Compartilhar";
import Posts from "../../componentes/posts/Posts";
import style from "./Home.module.css";
import { useContext, useEffect, useState } from "react";
import UserDataContext from "../../context/UserDataContext";
import GlobalContext from "../../context/GlobalContext";
import useUserData from "../../hooks/useUserData";
import { usePosts } from "../../hooks/usePosts";
import { fetchPosts } from "../../services/postData";

function Home() {
  const {
    isError: isErrorUsersData,
    isLoading: isLoadingUsersData,
    usersData,
    error: errorUserData,
  } = useUserData();
  const { setUserData } = useContext(UserDataContext);
  const { user } = useContext(GlobalContext);
  const { usersData: allUserData } = useUserData();
  const {
    isLoading: isLoadingPosts,
    data: postsData,
    isError: isErrorPosts,
    error: errorPosts,
  } = usePosts(fetchPosts);
  const [posts, setPosts] = useState([]);

  ///carregando os dados dos usuarios para o applayout

  useEffect(() => {
    if (usersData)
      setUserData(usersData.find((userData) => userData.id === user.id));
  }, [setUserData, usersData, user]);

  // carregando os posts para o feed
  useEffect(() => {
    if (postsData && allUserData) {
      // Sort posts by createdAt in descending order
      const sortedPosts = postsData.sort(
        (a, b) => new Date(b.id) - new Date(a.id)
      );

      // Combine posts with their corresponding user data
      const postsWithUserData = sortedPosts.map((post) => {
        const user = allUserData.find((user) => user.id === post.user_id);
        return { ...post, user };
      });

      setPosts(postsWithUserData);
      //console.log(postsWithUserData);
    }
  }, [postsData, allUserData]);

  // handling user the returns
  if (isLoadingUsersData || isLoadingPosts) {
    return <div>Loading...</div>;
  }

  if (isErrorUsersData || isErrorPosts) {
    return (
      <div>
        Error loading data: {errorUserData.message || errorPosts.message}
      </div>
    );
  }

  return (
    <div className={style.home}>
      <Compartilhar />
      <Posts posts={posts} user={posts.user} />
    </div>
  );
}

export default Home;
