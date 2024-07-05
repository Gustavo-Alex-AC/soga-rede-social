// ChatContainer.jsx
import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import socketIOClient from "socket.io-client";
import style from "./ChatContainer.module.css";

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const socketio = socketIOClient("http://localhost:3002");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });

    socketio.on("message", (msg) => {
      setChats((prevChats) => [...prevChats, msg]);
    });

    return () => {
      socketio.off("chat");
      socketio.off("message");
    };
  }, []);

  const addMessage = (chat) => {
    const newChat = {
      username: localStorage.getItem("user"),
      message: chat,
      avatar: localStorage.getItem("avatar"),
    };
    socketio.emit("newMessage", newChat);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  };

  return (
    <div>
      {user ? (
        <div className={style.home}>
          <div className={style.chats_header}>
            <h4>Username: {user}</h4>
            <p>
              <FaYoutube className={style.chats_icon} /> Code With Yousaf
            </p>
            <p className={style.chats_logout} onClick={logout}>
              <strong>Logout</strong>
            </p>
          </div>
          <ChatLists chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
