import React, { useState, useEffect } from "react";
import style from "./Evento.module.css";
import axios from "axios";

function Evento() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get("/api/eventos")
      .then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  const handleInteressadoClick = (eventoId) => {
    const usuarioId = 1; // Substitua pelo ID do usuário autenticado
    axios.post("/api/interesse", { usuario_id: usuarioId, evento_id: eventoId })
      .then(response => {
        const interessadosChange = response.data.interessados;
        setEventos(prevEventos => 
          prevEventos.map(evento => 
            evento.id === eventoId ? { ...evento, interessados: evento.interessados + interessadosChange } : evento
          )
        );
      })
      .catch(error => {
        console.error("There was an error updating the interest!", error);
      });
  };

  return (
    <div className={style.in}>
      <div className={style.conteiner}>
        <div className={style.main}>
          <h2>Descobrir eventos</h2>
          <div className={style.dividirEvento}>
            {eventos.map(evento => (
              <div className={style.event} key={evento.id}>
                <img
                  src={evento.imagem}
                  alt={evento.nome}
                />
                <div className={style.content}>
                  <h3>{evento.nome}</h3>
                  <div className={style.descricaoEve1}>
                    <p>{new Date(evento.data).toLocaleString()}</p>
                    <p>{evento.localizacao}</p>
                    <p>{evento.interessados} com interesse</p>
                  </div>
                  <button className={style.btn} onClick={() => handleInteressadoClick(evento.id)}>Interessado</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );






  
}

export default Evento;

