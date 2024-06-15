import { AiOutlineSend } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineManageSearch } from "react-icons/md";
import style from "./Mensagem.module.css";

function Mensagem() {
  return (
    <div className={style.outerContainer}>
      <div className={style.chatBox}>
        <div className={style.chatHeader}>
          <TiThMenuOutline className={style.menuIcon} />
          <span>Conversa</span>
          <MdOutlineManageSearch className={style.searchIcon} />
        </div>
        <div className={style.chatMessages}>
          {/* Mensagens aqui */}
        </div>
        <div className={style.chatInput}>
          <input
            type="text"
            className={style.messageInput}
            placeholder="Digite sua mensagem..."
          />
          <button className={style.sendButton}>
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mensagem;