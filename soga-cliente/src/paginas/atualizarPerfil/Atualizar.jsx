import style from "./Atualizar.module.css";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Atualizar() {
  const [foto, setFoto] = useState(null);
  const [biografia, setBiografia] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("foto", foto);
    formData.append("biografia", biografia);

    try {
      await axios.post("http://localhost:3000/api/user/profile", formData, {
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
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Atualizar;
