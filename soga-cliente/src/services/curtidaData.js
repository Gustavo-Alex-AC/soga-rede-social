import axios from "axios";

const BASEURL = "http://localhost:3000/api/curtidas";

export const fetchLikesCountByPostId = async (postId) => {
  try {
    const response = await axios.get(`${BASEURL}/count`, {
      params: { post_id: postId },
    });
    return response.data.count;
  } catch (erro) {
    console.log("Erro carregando curtidas por post:", erro);
  }
};

export const createLike = async (likeData) => {
  try {
    const response = await axios.post(`${BASEURL}`, likeData);
    return response.data;
  } catch (erro) {
    console.log("Erro criando likes:", erro);
  }
};

export const deleteLike = async (likeData) => {
  try {
    const response = await axios.delete(`${BASEURL}`, { data: likeData });
    return response.data;
  } catch (erro) {
    console.log("Erro eliminando likes:", erro);
  }
};

export const isPostLikedByUser = async (userId, postId) => {
  try {
    const response = await axios.get(`${BASEURL}/is-curtido`, {
      params: { user_id: userId, post_id: postId },
    });
    return response.data.curtida;
  } catch (erro) {
    console.log("Erro carregando curtidas por postd:", erro);
  }
};
