import axios from "axios";

const BASEURL = "http://localhost:3000/api";

export const fetchComentarios = async () => {
  try {
    const { data } = await axios.get(`${BASEURL}/comentarios`);
    return data;
  } catch (erro) {
    console.error("Erro carregando comentarios");
  }
};

export const fetchComentariosPostId = async (postId) => {
  try {
    const response = await axios.get("http://localhost:3000/api/comentarios", {
      params: { post_id: postId },
    });
    return response.data;
  } catch (erro) {
    console.error("Erro carregando comentarios");
  }
};

// Function to fetch comments count for a specific post
export const fetchComentariosCount = async (postId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/comentarios/count`,
      {
        params: { post_id: postId },
      }
    );
    return response.data.count;
  } catch (erro) {
    console.error("Erro carregando totais de comentários de cada post");
  }
};
