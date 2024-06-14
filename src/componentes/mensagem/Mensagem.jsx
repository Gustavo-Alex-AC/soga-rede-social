function Mensagem() {
  return <div className="outer-container">
        <div className="container">
            <div className="sidebar">
                <div className="menu">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="search">
                    <input type="text" placeholder="Pesquisar...">
                    <i className="fas fa-search"></i>
                </div>
                <div className="friends">
                    <h2>Amigos</h2>
                    <ul id="friends-list">
                        <li>
                            <img src="icones/MrSeven.jpg" height="38px" width="45px" alt="Amigo 1">
                            <div className="friend-info">
                                <span>Severino Monguende</span>
                                <p>Última mensagem - 10:30 AM</p>
                            </div>
                        </li>
                        <li>
                            <img src="icones/Benígno.jpg" height="38px" width="45px alt="Amigo 2">
                            <div className="friend-info">
                                <span>Benígno Tchitangua</span>
                                <p>Última mensagem - 11:15 AM</p>
                            </div>
                        </li>
                        <li>
                            <img src="icones/Rafaela.jpg" height="38px" width="45px alt="Amigo 3">
                            <div className="friend-info">
                                <span>Rafaela Ambrósio</span>
                                <p>Última mensagem - 12:00 PM</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="groups">
                    <h2>Grupos</h2>
                    <ul id="groups-list">
                        <li>
                            <img src="icones/Soga.jpg" height="38px" width="45px" alt="Grupo 1">
                            <div class="friend-info">
                                <span>SOGA - IGF Grupo nº4</span>
                                <p>Última mensagem - 09:45 AM</p>
                            </div>
                        </li>
                        <li>
                            <img src="icones/Isaf.jpg" height="38px" width="45px" alt="Grupo 2">
                            <div className="friend-info">
                                <span>ISAF - IGF T2 3º Ano</span>
                                <p>Última mensagem - 10:00 AM</p>
                            </div>
                        </li>
                        <li>
                            <img src="icones/Qsi.jpg" height="38px" width="45px" alt="Grupo 3">
                            <div className="friend-info">
                                <span>Trabalho de QSI - IGF</span>
                                <p>Última mensagem - 11:30 AM</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="chat">
                <div className="chat-header">
                    <h2>Conversa</h2>
                </div>
                <div className="chat-messages" id="chat-messages">
                    <!-- Mensagens vão aparecer aqui -->
                </div>
                <div className="chat-input">
                    <input type="text" id="message-input" placeholder="Digite sua mensagem...">
                    <button id="send-button"><i className="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    </div>
}

export default Mensagem;
