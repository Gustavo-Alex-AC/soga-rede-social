import { useContext, useState } from "react";
import style from "./Comentario.module.css";
import axios from "axios";
import UserDataContext from "../../context/UserDataContext";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fetchComentariosPostId } from "../../services/comentarioData";
import ReactTimeAgo from "react-time-ago";

function Comentario({ post }) {
  const { userData } = useContext(UserDataContext);
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  // Fetching comments for the specific post
  const {
    isLoading,
    data: comentarios,
    isError,
  } = useQuery({
    queryKey: ["comentarios", post.id], // Dynamic query key with post.id
    queryFn: () => fetchComentariosPostId(post.id), // Pass post.id to fetchComentarios
    onError: (error) => {
      toast.error(`Error fetching comments: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: () => {
      toast.success("Comments fetched successfully!");
    },
  });

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
      {comentarios?.map((comentario) => (
        <div className={style.comment} key={comentario.id}>
          <img src={comentario.User.profile_picture} alt="" />
          <div className={style.info}>
            <span>{comentario.User.nome}</span>
            <p>{comentario.content}</p>
          </div>
          <span className={style.date}>
            <ReactTimeAgo date={comentario.created_at} locale="pt-PT" />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Comentario;
