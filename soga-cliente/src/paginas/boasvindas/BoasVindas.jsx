import style from "./BoasVindas.module.css";

import React from "react";
import { Link } from "react-router-dom";

function BoasVindas() {
  // Aqui é para estado e javascript

  // Aqui no return é onde se coloca a estrutura(componentes, paginas), o html e as classes do css ou até inline style
  return (
    <body className={style.body}>
      <header className={style.header}>
        <h2 className={style.logo}>SOGA</h2>
        <nav className={style.navigation}>
          <Link href="#">Termos e Condições</Link>
          <Link href="#">Grupos</Link>
          <Link href="#">Sobre</Link>
        </nav>
        <Link to="/login">
          <button className={style.btnEntrar}>Entrar</button>
        </Link>
      </header>
      <div className={style.welcome}>
        <h1>
          Seja <br /> Bem-Vindo
        </h1>
        <p>Mantenha-se conectado</p>
        <p>connosco.</p>
        <div>
          <div>
            <Link to="/registrar">
              <button className={style.btnRegistrar}>Registrar</button>
            </Link>
            <br />
          </div>
        </div>
        <h3>Não tem uma conta?</h3>
      </div>
    </body>
  );
}

export default BoasVindas;
