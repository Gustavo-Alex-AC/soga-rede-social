import { useState } from "react";
import style from "./Post.module.css";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Comentario from "../comentários/Comentario";

function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className={style.post}>
      <div className={style.container}>
        <div className={style.user}>
          <div className={style.userInfo}>
            <img src={post.profilePic} alt="" />
            <div className={style.details}>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={style.name}>{post.name}</span>
              </Link>
              <span className={style.date}>1 min ago</span>
            </div>
          </div>
          <MdOutlineMoreHoriz size={22} />
        </div>
        <div className={style.content}>
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className={style.info}>
          <div className={style.item}>
            {liked ? <AiOutlineLike size={22} /> : <AiFillLike size={22} />}
            12 Likes
          </div>
          <div
            className={style.item}
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <FaRegComments size={22} />
            12 Comments
          </div>
          <div className={style.item}>
            <RiShareForwardLine size={22} />
            Share
          </div>
        </div>
        {commentOpen && <Comentario />}
      </div>
    </div>
  );
}

export default Post;
