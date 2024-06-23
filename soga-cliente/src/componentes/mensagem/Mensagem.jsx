import { AiOutlineSend } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineManageSearch } from "react-icons/md";
import style from "./Mensagem.module.css";

function Mensagem() {
  return (
    <div className={style.pageContainer}>
      <div className={style.outerContainer}>
        <div className={style.userSidebar}>
          <div className={style.sidebarHeader}>
            <TiThMenuOutline className={style.menuIcon} />
            <MdOutlineManageSearch className={style.searchIcon} />
          </div>
          <div className={style.onlineFriends}>
            <h3>Conversas</h3>
            <div className={style.friend}>
              <img
                src="https://via.placeholder.com/40"
                alt="Severino"
                className={style.profileImage}
              />
              <div>
                <span>Mr_Seven</span>
                <small className={style.timestamp}>Hoje, 10:30 AM</small>
              </div>
            </div>
            <div className={style.friend}>
              <img
                src="https://via.placeholder.com/40"
                alt="Gustavo"
                className={style.profileImage}
              />
              <div>
                <span>Gustavo Alex</span>
                <small className={style.timestamp}>Hoje, 10:32 AM</small>
              </div>
            </div>
            <div className={style.friend}>
              <img
                src="https://via.placeholder.com/40"
                alt="Elisama"
                className={style.profileImage}
              />
              <div>
                <span>Elisama</span>
                <small className={style.timestamp}>Hoje, 10:30 AM</small>
              </div>
            </div>
            <div className={style.friend}>
              <img
                src="https://via.placeholder.com/40"
                alt="Jeremias"
                className={style.profileImage}
              />
              <div>
                <span>Jeremias</span>
                <small className={style.timestamp}>Hoje, 10:30 AM</small>
              </div>
            </div>
          </div>
          <div className={style.groupChats}>
            <h3>Grupos</h3>
            <div className={style.group}>
              <img
                src="https://via.placeholder.com/40"
                alt="Grupo 1"
                className={style.profileImage}
              />
              <div>
                <span>SOGA - IGF M1</span>
                <small className={style.timestamp}>Ontem, 9:15 PM</small>
              </div>
            </div>
            <div className={style.group}>
              <img
                src="https://via.placeholder.com/40"
                alt="Grupo 2"
                className={style.profileImage}
              />
              <div>
                <span>ISAF - IGF 3º Ano</span>
                <small className={style.timestamp}>Ontem, 8:45 PM</small>
              </div>
            </div>
          </div>
        </div>
        <div className={style.chatBox}>
          <div className={style.chatHeader}>
            <TiThMenuOutline className={style.menuIcon} />
            <span>Chat</span>
            <MdOutlineManageSearch className={style.searchIcon} />
          </div>
          <div className={style.chatMessages}>
            <div className={style.message}>
              <span className={style.messageContent}>Olá! Como vai?</span>
              <small className={style.messageTimestamp}>Hoje, 10:30 AM</small>
            </div>
            <div className={style.message}>
              <span className={style.messageContent}>Estou bem, e você?</span>
              <small className={style.messageTimestamp}>Hoje, 10:32 AM</small>
            </div>
          </div>
          <div className={style.chatInput}>
            <textarea
              className={style.messageInput}
              placeholder="Digite sua mensagem..."
            />
            <button className={style.sendButton}>
              <AiOutlineSend size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mensagem;
