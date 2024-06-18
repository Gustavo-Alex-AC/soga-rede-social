import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaCamera } from "react-icons/fa";
import { fetchUser } from "../../services/userData";
import { toast } from "react-toastify";
import style from "./Perfil.module.css";
import Posts from "../../componentes/posts/Posts";
import UserDataContext from "../../context/UserDataContext";
import { fetchUserPosts } from "../../services/postData";
import Erro from "../../ui/Erro";
import Spinner from "../../ui/Spinner";
import GlobalContext from "../../context/GlobalContext";

function Perfil() {
  const { user } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const { setUserData } = useContext(UserDataContext);
  const { userId } = useParams(); // Capture userId from URL

  // Load user data by ID
  const {
    isLoading: isLoadingUserData,
    data: userData,
    isError: isErrorUserData,
    error: errorUserData,
  } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId),
    onError: (error) => {
      toast.error(`Error fetching user: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: (data) => {
      toast.success("User data fetched successfully!");
    },
  });

  setUserData(userData);

  // Load posts by user ID
  const {
    isLoading: isLoadingPosts,
    data: postsData,
    isError: isErrorPosts,
    error: errorPosts,
  } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => fetchUserPosts(userId),
    onError: (error) => {
      toast.error(`Error fetching Posts data: ${error.message}`);
      console.error("Error details:", error);
    },
    onSuccess: () => {
      toast.success("Posts fetched successfully!");
    },
  });

  // ordenando os posts por ordem de chegada
  const sortedPosts = postsData?.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );

  // Combine posts with user data
  const postsWithUserData = sortedPosts?.map((post) => ({
    ...post,
    user: userData,
  }));

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const [isEditing, setIsEditing] = useState({
    name: false,
    bio: false,
    interests: false,
  });

  // Toggle edit mode for fields
  const toggleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handling the returns
  if (isLoadingUserData || isLoadingPosts) {
    return <Spinner />;
  }

  if (isErrorUserData || isErrorPosts) {
    return (
      <Erro mensagem={errorUserData.message} /> || (
        <Erro mensagem={errorPosts.message} />
      )
    );
  }

  return (
    <div className={style.profile}>
      <div className={style.images}>
        <img
          src="https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717286400&semt=ais_user"
          alt="Cover"
          className={style.cover}
        />
        <div className={style.profilePicContainer}>
          <img
            src={userData?.profile_picture}
            alt="Profile"
            className={style.profilePic}
          />
          <FaCamera
            onClick={() => document.getElementById("profilePicInput").click()}
            className={style.editProfilePicIcon}
            size={25}
          />
          <input
            type="file"
            id="profilePicInput"
            onChange={handleProfilePicChange}
            className={style.fileInput}
          />
        </div>
      </div>
      <div className={style.profileContainer}>
        <div className={style.uInfo}>
          <div className={style.nameContainer}>
            {isEditing.name ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => toggleEdit("name")}
                className={style.nameInput}
              />
            ) : (
              <span className={style.name}>{userData?.nome}</span>
            )}
            <FaEdit
              onClick={() => toggleEdit("name")}
              className={style.editIcon}
            />
          </div>
          <div className={style.info}>
            <div className={style.item}>
              <div className={style.itemBioIcon}>
                <h2>Biografia</h2>
                <FaEdit
                  onClick={() => toggleEdit("bio")}
                  className={style.editIcon}
                />
              </div>
              <div className={style.itemDiv}>
                <div>
                  {isEditing.bio ? (
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      onBlur={() => toggleEdit("bio")}
                      className={style.bioInput}
                    ></textarea>
                  ) : (
                    <p className={style.bio}>{userData?.bio}</p>
                  )}
                </div>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.itemBioIcon}>
                <h2>Interesses</h2>
                <FaEdit
                  onClick={() => toggleEdit("interests")}
                  className={style.editIcon}
                />
              </div>
              <div className={style.itemDiv}>
                <div>
                  {isEditing.interests ? (
                    <textarea
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      onBlur={() => toggleEdit("interests")}
                      className={style.interestsInput}
                    ></textarea>
                  ) : (
                    <p className={style.interests}>{userData?.interests}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <button className={style.friendButton}>Atualizar perfil</button>
          ) : (
            <button className={style.friendButton}>Pedir amizade</button>
          )}
        </div>

        <Posts posts={postsWithUserData} />
      </div>
    </div>
  );
}

export default Perfil;
