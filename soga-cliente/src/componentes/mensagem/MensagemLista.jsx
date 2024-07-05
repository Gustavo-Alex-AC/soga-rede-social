import React, { useContext, useEffect, useState } from "react";
import styles from "./MensagemLista.module.css";
import axios from "axios";
import GlobalContext from "../../context/GlobalContext";

const MessageList = ({ onSelectChat, onNewChat }) => {
  const { user } = useContext(GlobalContext);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/mensagens/${user.id}`
        );
        setChats(response.data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    };
    fetchMessages();
  }, [user.id, setChats]);

  return (
    <div className={styles.messageList}>
      <button onClick={onNewChat}>Start New Chat</button>
      {chats?.map((chat) => (
        <div
          key={chat?.id}
          className={styles.messageItem}
          onClick={() => onSelectChat(chat)}
        >
          <img
            src={
              `http://localhost:3000/uploads/${chat?.receiver?.profile_picture}` ||
              "/uploads/default-profile.jpg"
            }
            alt={chat?.receiver?.nome}
          />
          <div>
            <p className={styles.userName}>{chat?.receiver?.nome}</p>
            <p className={styles.messagePreview}>
              {chat?.content?.substring(0, 20)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
