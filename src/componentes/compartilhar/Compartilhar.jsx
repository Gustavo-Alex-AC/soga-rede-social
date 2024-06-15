import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoImageOutline, IoVideocamOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import axios from "axios";
import style from "./Compartilhar.module.css";
import UserDataContext from "../../context/UserDataContext";
import { useQueryClient } from "@tanstack/react-query";

function Compartilhar() {
  const { userData } = useContext(UserDataContext);
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const queryClient = useQueryClient(); // Initialize useQueryClient

  const handleContentChange = (e) => setContent(e.target.value);

  const handleMediaChange = (e) => setMedia(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    formData.append("media", media);
    formData.append("user_id", userData?.id); // Adding user_id to the formData

    console.log("formData:", [...formData.entries()]); // Log the form data

    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Post created successfully:", response.data);
      queryClient.invalidateQueries("posts"); // Invalidate the posts query to refetch the data
      setContent("");
      setMedia(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  let fileNameVideo;
  let fileNameImg;

  if (media?.name?.endsWith(".mp4")) {
    fileNameVideo = media?.name?.slice(0, 7) + "...";
  } else if (media?.name) {
    fileNameImg = media?.name?.slice(0, 7) + "...";
  }

  return (
    <div className={style.share}>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.top}>
            <img
              src={userData?.profile_picture || "/uploads/default_profile.png"}
              alt="user"
            />
            <input
              type="text"
              placeholder={`O que estás a pensar ${userData?.nome}?`}
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <hr />
          <div className={style.bottom}>
            <div className={style.left}>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleMediaChange}
              />
              <label htmlFor="file">
                <div className={style.item}>
                  <IoImageOutline size={22} />
                  <span>{fileNameImg ? fileNameImg : "Imagem"}</span>
                </div>
              </label>
              <label htmlFor="file">
                <div className={style.item}>
                  <IoVideocamOutline size={22} />
                  <span>{fileNameVideo ? fileNameVideo : "Video"}</span>
                </div>
              </label>
              <div className={style.item}>
                <LiaUserFriendsSolid size={22} />
                <span>Tag Friends</span>
              </div>
            </div>
            <div className={style.right}>
              <button type="submit">Partilhar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Compartilhar;
