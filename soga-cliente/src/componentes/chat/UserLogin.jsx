// UserLogin.jsx
import React, { useState } from "react";
import style from "./UserLogin.module.css";

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("user", username);
      // Optional: Set avatar or other user details
      setUser(username);
    }
  };

  return (
    <div className={style.login_container}>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
