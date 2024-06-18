import React, { useState } from "react";
import { FaEdit, FaCamera } from "react-icons/fa";
import style from "./Perfil.module.css";
import Posts from "../../componentes/posts/Posts";

function Perfil() {
  const [name, setName] = useState("Paula Alex");
  const [profilePic, setProfilePic] = useState(
    "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
  );
  const [bio, setBio] = useState("This is the bio.");
  const [interests, setInterests] = useState("Reading, Travelling, Coding");

  const [isEditing, setIsEditing] = useState({
    name: false,
    bio: false,
    interests: false,
  });

  const handleProfilePicChange = (e) =>
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  const toggleEdit = (field) =>
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });

  return (
    <div className={style.profile}>
      <div className={style.images}>
        <img
          src="https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717286400&semt=ais_user"
          alt="Cover"
          className={style.cover}
        />
        <div className={style.profilePicContainer}>
          <img src={profilePic} alt="Profile" className={style.profilePic} />
          <FaCamera
            onClick={() => document.getElementById("profilePicInput").click()}
            className={style.editProfilePicIcon}
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
              <span className={style.name}>{name}</span>
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
                    <p className={style.bio}>{bio}</p>
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
                    <p className={style.interests}>{interests}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className={style.friendButton}>Pedir amizade</button>
        </div>

        {/* Mostrar todos os posts */}
        <Posts />
      </div>
    </div>
  );
}

export default Perfil;
