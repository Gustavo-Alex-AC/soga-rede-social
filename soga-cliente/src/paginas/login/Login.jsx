import style from "./Login.module.css";

import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import GlobalContext from "../../context/GlobalContext";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(GlobalContext);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log({ email, password }); // Log request data
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          { email, password }
        );
        const token = response.data.token;
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        //navigate(`/perfil/${decodedToken.id}`);
        navigate(`/home`);
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    return (
      <div className={style.body}>
        <div className={style.wrapper}>
        <div className={style.form}>
          <h2>Entrar</h2>
          <form onSubmit={handleSubmit}>
            <div className={style.inputBox}>
            <label for="email">Email ou número de telefone</label>
            <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             id="email" name="email" required/>
             </div>
          
              <div className={style.inputBox}>
            <label for="password">Digite sua senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" name="password" required/>
              </div>
              
            <div className={style.remember}>
                <label><input type="checkbox" />Lembrar de mim</label>
                <a href="#">Esqueceu a palavra-passe?</a>
            </div>
            <button className={style.btnEntrar} type="submit">Entrar</button>
          </form>
        </div>
        </div>
        </div>

      );
    }
    
    export default Login;
    