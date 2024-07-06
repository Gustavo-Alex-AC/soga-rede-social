import React from "react";
import style from "./Definicoes";
import DeleteAccount from "./DeleteAccount";

const Definicoes = () => {
  return (
    <div className={style.settingsContainer}>
      <h1>Definições</h1>

      <DeleteAccount />
    </div>
  );
};

export default Definicoes;
