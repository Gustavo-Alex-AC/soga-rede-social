import { useContext, useState } from "react";
import style from "./Comentario.module.css";
import axios from "axios";
import UserDataContext from "../../context/UserDataContext";
import { useQueryClient } from "@tanstack/react-query";

import { fetchComentariosCount } from "../../services/comentarioData";
import ReactTimeAgo from "react-time-ago";

function Comentario({
  post,
  setCommentsCount,
  comentarios,
  isError,
  isLoading,
}) {
  const { userData } = useContext(UserDataContext);
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData?.id || !post?.id || !content.trim()) {
      console.error("Missing required fields");
      return;
    }

    const formData = {
      user_id: userData.id,
      post_id: post.id,
      content: content,
    };

    console.log("FormData:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/comentarios",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Comentario created successfully:", response.data);
      queryClient.invalidateQueries(["comentarios", post.id]); // Invalidate the specific comments query
      setContent("");
      fetchComentariosCount(post.id).then(setCommentsCount); // Update the comments count after a new comment is added
    } catch (error) {
      if (error.response) {
        console.error("Error creating comentarios:", error.response.data);
      } else {
        console.error("Error creating comentarios:", error.message);
      }
    }
  };

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  if (isError) {
    return <div>Error loading comments</div>;
  }

  console.log("comentarios: ", comentarios);

  return (
    <div className={style.comments}>
      <div className={style.write}>
        <img src={userData?.profile_picture} alt="" />
        <input
          type="text"
          placeholder="Escreve um comentário..."
          value={content}
          onChange={handleContentChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      {comentarios?.length ? (
        comentarios.map((comentario) => (
          <div className={style.comment} key={comentario.id}>
            <img src={comentario.User?.profile_picture} alt="" />
            <div className={style.info}>
              <span>{comentario.User?.nome}</span>
              <p>{comentario.content}</p>
            </div>
            <span className={style.date}>
              <ReactTimeAgo date={comentario.created_at} locale="pt-PT" />
            </span>
          </div>
        ))
      ) : (
        <div>Sem comentários ainda.</div>
      )}
    </div>
  );
}

export default Comentario;
