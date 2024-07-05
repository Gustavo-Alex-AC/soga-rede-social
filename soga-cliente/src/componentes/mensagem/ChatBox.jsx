import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GlobalContext from "../../context/GlobalContext";
import styles from "./ChatBox.module.css";

const BASEURL = "http://localhost:3000/api/mensagens";

const ChatBox = ({ selectedChat }) => {
  const { user } = useContext(GlobalContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${BASEURL}/${user.id}/${selectedChat.id}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    };

    if (selectedChat) {
      fetchMessages();
    }
  }, [selectedChat, user.id]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    try {
      const response = await axios.post(`${BASEURL}/send`, {
        sender_id: user.id,
        receiver_id: selectedChat.id,
        content: newMessage,
      });

      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender_id === user.id
                ? styles.sentMessage
                : styles.receivedMessage
            }
          >
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className={styles.messageInput}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
