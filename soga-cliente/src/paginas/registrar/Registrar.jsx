import style from "./Registrar.module.css";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Registrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/auth/register`, {
        nome,
        email,
        password,
      });
      navigate("/photo");
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
           <label for="email">Email ou numero de telefone</label>
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
        <button className={style.btnRegistrar} type="submit">Registrar</button>
      </form>
      </div>
      </div> 
      </div>   
  );
}

export default Registrar;
