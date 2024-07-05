// ChatLists.jsx
import React, { useEffect, useRef } from "react";
import style from "./ChatLists";

const ChatLists = ({ chats }) => {
  const endOfMessages = useRef();
  const user = localStorage.getItem("user");

  function SenderChat({ message, username, avatar }) {
    return (
      <div className={style.chat_sender}>
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }

  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className={style.chat_receiver}>
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    endOfMessages.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.chats_list}>
      {chats.map((chat, index) =>
        chat.username === user ? (
          <SenderChat
            key={index}
            message={chat.message}
            username={chat.username}
            avatar={chat.avatar}
          />
        ) : (
          <ReceiverChat
            key={index}
            message={chat.message}
            username={chat.username}
            avatar={chat.avatar}
          />
        )
      )}
      <div ref={endOfMessages}></div>
    </div>
  );
};

export default ChatLists;
