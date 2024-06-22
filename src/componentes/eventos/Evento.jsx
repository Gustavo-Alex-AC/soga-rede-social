import React from "react";
import style from './evento.module.css';


function Evento() {
  return <div className= {style.in}>

<div className={style.conteiner}>
  
  <div className={style.main}>
      <h2>Descobrir eventos</h2>
    

      <div className={style.dividirEvento}>
          
      <div className={style.event}>
          <img src={images (1).jpg} alt="Entrega da taça UCL ao Manchester City"/>
          <div className={style.content}>
              <h3>Entrega da taça UCL </h3>

              <div className={style.descricaoEve}>
              <p>Sex, 21/06 às 19:00</p>
              <p>Madrid-Santiago Bernabeu</p>
              <p>163 com interesse </p>
            </div>
              <button id="btn">Interessado</button>
          </div>
      </div>

      <div className={style.evento}>
        <img src={images (2).jpg} alt="Estrutura"/>
        <div className={style.content}>
            <h3>Estrutura</h3>

            <div className={style.descricaoEve1}>
            <p>Seg, 8/07 às 00:00</p>
            <p>Luanda</p>
            <p>18 com interesse</p>
        </div>
        <button id="btn">Interessado</button>
        </div>
    </div>

    <div className={style.evento}>
      <img src={images (2).jpg} alt="Estrutura"/>
      <div className={style.content}>
          <h3>Estrutura</h3>

          <div className={style.descricaoEve1}>
          <p>Seg, 8/07 às 00:00</p>
          <p>Luanda</p>
          <p>18 com interesse</p>
      </div>
      <button id="btn">Interessado</button>
      </div>
  </div>

      
      <div className={style.evento}>
          <img src={images (2).jpg} alt="Estrutura"/>
          <div className={style.content}>
              <h3>Estrutura</h3>

              <div className={style.descricaoEve1}>
              <p>Seg, 8/07 às 00:00</p>
              <p>Luanda</p>
              <p>18 com interesse</p>
          </div>
          <button id="btn">Interessado</button>
          </div>
      </div>
    </div>
  </div>
</div>

</div>
 }

export default Evento;
