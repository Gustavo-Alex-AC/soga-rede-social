import Post from "../Post/Post";
import style from "./Posts.module.css";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Bad Jerex",
      userId: 2,
      profilePic:
        "https://miro.medium.com/v2/resize:fit:1024/1*cfH7VlZfdpP4OnBI1Ze7sQ.png",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://miro.medium.com/v2/resize:fit:1024/1*cfH7VlZfdpP4OnBI1Ze7sQ.png",
    },
    {
      id: 2,
      name: "Elisama Star",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 3,
      name: "Mr seven",
      userId: 1,
      profilePic:
        "https://yt3.googleusercontent.com/WwX1G6HXgGi4A7MUbHroRtxH3DdISGCzl9eQnb8Nh98mIgoNP6Y-ASYUsBhdcjbqZu0AtK-W=s900-c-k-c0x00ffffff-no-rj",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://yt3.googleusercontent.com/WwX1G6HXgGi4A7MUbHroRtxH3DdISGCzl9eQnb8Nh98mIgoNP6Y-ASYUsBhdcjbqZu0AtK-W=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div className={style.posts}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
