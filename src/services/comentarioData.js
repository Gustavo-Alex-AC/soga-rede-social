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
