import Post from "../post/Post";
import style from "./Posts.module.css";

const Posts = ({ posts }) => {
  return (
    <div className={style.posts}>
      {posts.map((post) => (
        <Post post={post} key={post.id} userData={post.user} />
      ))}
    </div>
  );
};

export default Posts;
