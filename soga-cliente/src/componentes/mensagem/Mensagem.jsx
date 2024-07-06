import React, { useContext, useState } from "react";
import MessageList from "./MensagemLista";
import ChatBox from "./ChatBox";
import NewChat from "./NewChat";
import styles from "./Mensagem.module.css";

const Mensagem = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isNewChat, setIsNewChat] = useState(false);

  const handleNewChat = () => {
    setIsNewChat(true);
    setSelectedChat(null);
  };

  const handleSelectChat = (chat) => {
    setIsNewChat(false); // Close the NewChat form
    setSelectedChat(chat);
  };

  return (
    <div className={styles.messaging}>
      <div className={styles.sidebar}>
        <MessageList
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
        />
      </div>
      <div className={styles.chatContainer}>
        {isNewChat ? (
          <NewChat
            setIsNewChat={setIsNewChat}
            setSelectedChat={setSelectedChat}
          />
        ) : selectedChat ? (
          <ChatBox selectedChat={selectedChat} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Mensagem;
