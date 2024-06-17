import { useContext, useEffect, useState } from "react";
import style from "./Post.module.css";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Comentario from "../comentários/Comentario";
import {
  fetchComentariosCount,
  fetchComentariosPostId,
} from "../../services/comentarioData";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import {
  createLike,
  deleteLike,
  fetchLikesCountByPostId,
  isPostLikedByUser,
} from "../../services/curtidaData";
import ReactTimeAgo from "react-time-ago";
import GlobalContext from "../../context/GlobalContext";

function Post({ post, userData }) {
  const { user } = useContext(GlobalContext);
  const [commentsCount, setCommentsCount] = useState(0);
  const [commentOpen, setCommentOpen] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false); // Assuming you track whether the user has liked the post

  // Fetching comments for the specific post
  const {
    isLoading,
    data: comentarios,
    isError,
    error,
  } = useQuery({
    queryKey: ["comentarios", post.id], // Dynamic query key with post.id
    queryFn: () => fetchComentariosPostId(post.id), // Pass post.id to fetchComentarios
    onError: (error) => {
      toast.error(`Error fetching comments: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: (comentarios) => {
      toast.success("Comments fetched successfully!");
      setCommentsCount(comentarios.length);
    },
  });

  useEffect(() => {
    // Fetch comments count when the component mounts
    fetchComentariosCount(post.id).then(setCommentsCount);
  }, [post.id, setCommentsCount]);

  // criar, carregar e eliminar likes
  useEffect(() => {
    const loadLikesCount = async () => {
      const count = await fetchLikesCountByPostId(post.id);
      setLikesCount(count);
      const likedStatus = await isPostLikedByUser(user.id, post.id);
      setLiked(likedStatus);
    };

    loadLikesCount();
  }, [post.id, user.id]);

  const handleLike = async () => {
    if (liked) {
      await deleteLike({ user_id: user.id, post_id: post.id });
      setLikesCount(likesCount - 1);
    } else {
      await createLike({ user_id: user.id, post_id: post.id });
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={style.post}>
      <div className={style.container}>
        <div className={style.user}>
          <div className={style.userInfo}>
            <img src={userData?.profile_picture} alt="" />
            <div className={style.details}>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={style.name}>{userData?.nome}</span>
              </Link>
              <span className={style.date}>
                <ReactTimeAgo date={post.created_at} locale="pt-PT" />
              </span>
            </div>
          </div>
          <MdOutlineMoreHoriz size={22} />
        </div>
        <div className={style.content}>
          <p>{post.content}</p>

          {post.mediaUrl &&
            (post.mediaUrl.endsWith(".mp4") ? (
              <video controls>
                <source
                  src={`http://localhost:3000/uploads/${post.mediaUrl}`}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                src={`http://localhost:3000/uploads/${post.mediaUrl}`}
                alt="media"
              />
            ))}
        </div>
        <div className={style.info}>
          <div className={style.item} onClick={handleLike}>
            {liked ? <AiFillLike size={22} /> : <AiOutlineLike size={22} />}
            {likesCount} Likes
          </div>
          <div
            className={style.item}
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <FaRegComments size={22} />
            {commentsCount} Comentários
          </div>
          <div className={style.item}>
            <RiShareForwardLine size={22} />
            Share
          </div>
        </div>
        {commentOpen && (
          <Comentario
            post={post}
            setCommentsCount={setCommentsCount}
            comentarios={comentarios}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
        )}
      </div>
    </div>
  );
}

export default Post;
