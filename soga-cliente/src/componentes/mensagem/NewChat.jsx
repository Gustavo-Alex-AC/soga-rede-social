import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./NewChat.module.css";
import GlobalContext from "../../context/GlobalContext";
import SelectedChatContext from "../../context/SelectedChats";

const BASEURL = "http://localhost:3000/api";

const NewChat = ({ setIsNewChat, setSelectedChat }) => {
  const { user } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const { setChats } = useContext(SelectedChatContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASEURL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(`${BASEURL}/mensagens/send`, {
        sender_id: user.id,
        receiver_id: selectedUser.id,
        content: message,
      });

      const newChat = response.data;
      setSelectedChat(newChat);
      setIsNewChat(false); // Close the NewChat form
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className={styles.newChat}>
      <h2>Start New Chat</h2>
      <select
        onChange={(e) =>
          setSelectedUser(
            users.find((user) => user.id === parseInt(e.target.value))
          )
        }
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.nome}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage} disabled={!selectedUser || !message}>
        Send
      </button>
    </div>
  );
};

export default NewChat;
