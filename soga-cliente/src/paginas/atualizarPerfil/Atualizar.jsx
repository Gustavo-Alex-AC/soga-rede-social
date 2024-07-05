import style from "./Atualizar.module.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import UserDataContext from "../../context/UserDataContext";

function Atualizar() {
  const { user } = useContext(GlobalContext);
  const { userData } = useContext(UserDataContext);
  const [foto, setFoto] = useState(null); // Initialize with null
  const [biografia, setBiografia] = useState(userData?.bio || "");
  const [interesses, setInteresses] = useState(userData?.interests || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (foto) {
      formData.append("profile_picture", foto);
    } else if (userData?.profile_picture) {
      formData.append("profile_picture", userData.profile_picture);
    }

    formData.append("bio", biografia);
    formData.append("interests", interesses);

    try {
      await axios.put(`http://localhost:3000/api/users/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <h2>Configure seu perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.inputBox}>
          <label htmlFor="foto">Fotografia</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
        {userData?.profile_picture && (
          <div className={style.inputBox}>
            <label>Current Profile Picture</label>
            <img
              src={`http://localhost:3000/uploads/${userData.profile_picture}`}
              alt="Current Profile"
              style={{ width: "100%" }}
            />
          </div>
        )}
        <div className={style.inputBox}>
          <label htmlFor="biografia">Biografia</label>
          <textarea
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
          />
        </div>
        <div className={style.inputBox}>
          <label htmlFor="interesses">Interesses</label>
          <textarea
            value={interesses}
            onChange={(e) => setInteresses(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Atualizar;
