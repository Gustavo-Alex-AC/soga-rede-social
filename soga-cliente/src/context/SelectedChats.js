import React, { createContext, useEffect, useState } from "react";

const SelectedChatContext = createContext();

export const SelectedChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [postDate, setPostData] = useState([]);

  useEffect(() => {}, []);

  return (
    <SelectedChatContext.Provider
      value={{
        chats,
        setChats,
      }}
    >
      {children}
    </SelectedChatContext.Provider>
  );
};

export default SelectedChatContext;
