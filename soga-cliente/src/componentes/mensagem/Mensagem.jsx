import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';



const socket = io('http://localhost:3001');

const Mensagem = () => {
  const [mensagens, setMensagens] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const mensagemRef = useRef(null);

  useEffect(() => {
    socket.on('mensagem', (data) => {
      setMensagens((prevMensagens) => [...prevMensagens, data]);
    });

    return () => {
      socket.off('mensagem');
    };
  }, []);

  const enviarMensagem = () => {
    if (mensagem.trim()) {
      const novaMensagem = {
        autor: 'User', // Substitua pelo nome do usuário real
        texto: mensagem,
        hora: new Date().toLocaleTimeString(),
      };
      socket.emit('mensagem', novaMensagem);
      setMensagem('');
      mensagemRef.current.focus();
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
        {mensagens.map((msg, index) => (
          <div key={index}>
            <strong>{msg.autor}</strong>: {msg.texto} <em>{msg.hora}</em>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          ref={mensagemRef}
          onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
};

export default Mensagem;
