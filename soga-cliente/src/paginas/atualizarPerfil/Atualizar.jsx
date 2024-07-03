import style from "./Atualizar.module.css";

import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

function Atualizar() {
  const { user } = useContext(GlobalContext);
  const [foto, setFoto] = useState(null);
  const [biografia, setBiografia] = useState("");
  const [interesses, setInteresses] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_picture", foto);
    formData.append("bio", biografia);
    formData.append("interests", interesses);

    console.log("formData:", [...formData.entries()]); // Log the form data

    try {
      await axios.put(`http://localhost:3000/api/users/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/login");
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
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
        <div className={style.inputBox}>
          <label htmlFor="biografia">Biografia</label>
          <textarea
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
          ></textarea>
          <label htmlFor="interesses">Interesses</label>
          <textarea
            value={interesses}
            onChange={(e) => setInteresses(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Atualizar;
