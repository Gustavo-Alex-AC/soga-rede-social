import React from "react";
import style from "./Evento.module.css";

function Evento() {
  return (
    <div className={style.in}>
      <div className={style.conteiner}>
        <div className={style.main}>
          <h2>Descobrir eventos</h2>

          <div className={style.dividirEvento}>
            <div className={style.event}>
              <img
                src="https://i.guim.co.uk/img/media/9afb9dd3089f1390a0913ea246ea215f035bde5b/0_207_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aea2d09416a408454c070de1ba13444b"
                alt="Entrega da taça UCL ao Manchester City"
              />
              <div className={style.content}>
                <h3>Entrega da taça UCL </h3>

                <div className={style.descricaoEve1}>
                  <p>Sex, 21/06 às 19:00</p>
                  <p>Madrid-Santiago Bernabeu</p>
                  <p>163 com interesse </p>
                </div>
                <button className={style.btn}>Interessado</button>
              </div>
            </div>

            <div className={style.evento}>
              <img
                src="https://i.guim.co.uk/img/media/9afb9dd3089f1390a0913ea246ea215f035bde5b/0_207_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aea2d09416a408454c070de1ba13444b"
                alt="Estrutura"
              />
              <div className={style.content}>
                <h3>Estrutura</h3>

                <div className={style.descricaoEve1}>
                  <p>Seg, 8/07 às 00:00</p>
                  <p>Luanda</p>
                  <p>18 com interesse</p>
                </div>
                <button className={style.btn}>Interessado</button>
              </div>
            </div>

            <div className={style.evento}>
              <img
                src="https://i.guim.co.uk/img/media/9afb9dd3089f1390a0913ea246ea215f035bde5b/0_207_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aea2d09416a408454c070de1ba13444b"
                alt="Estrutura"
              />
              <div className={style.content}>
                <h3>Estrutura</h3>

                <div className={style.descricaoEve1}>
                  <p>Seg, 8/07 às 00:00</p>
                  <p>Luanda</p>
                  <p>18 com interesse</p>
                </div>
                <button className={style.btn}>Interessado</button>
              </div>
            </div>

            <div className={style.evento}>
              <img
                src="https://i.guim.co.uk/img/media/9afb9dd3089f1390a0913ea246ea215f035bde5b/0_207_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aea2d09416a408454c070de1ba13444b"
                alt="Estrutura"
              />
              <div className={style.content}>
                <h3>Estrutura</h3>

                <div className={style.descricaoEve1}>
                  <p>Seg, 8/07 às 00:00</p>
                  <p>Luanda</p>
                  <p>18 com interesse</p>
                </div>
                <button className={style.btn}>Interessado</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evento;
