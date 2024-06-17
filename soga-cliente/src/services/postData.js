import axios from "axios";

const BASEURL = "http://localhost:3000/api";

export const fetchPosts = async () => {
  try {
    const { data } = await axios.get(`${BASEURL}/posts`);
    return data;
  } catch (erro) {
    console.error("Erro carregando Posts");
  }
};

export const fetchFeedPosts = async () => {
  const response = await axios.get("http://localhost:3000/api/posts/feed");
  return response.data;
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${BASEURL}/posts/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro carregando posts por ID");
  }
};
