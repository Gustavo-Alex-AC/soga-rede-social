import style from "./Registrar.module.css";

import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import GlobalContext from "../../context/GlobalContext";

function Registrar() {
  const { setUser } = useContext(GlobalContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/auth/register`, {
        nome,
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
      navigate("/atualizar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <div className={style.form}>
          <h2>Registrar</h2>
          <form onSubmit={handleSubmit}>
            <div className={style.inputBox}>
              <label for="text">Nome de usuario</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className={style.inputBox}>
              <label for="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={style.inputBox}>
              <label for="password">Criar senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={style.btnRegistrar} type="submit">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
