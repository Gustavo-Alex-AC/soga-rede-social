import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Amizades.module.css";

import GlobalContext from "../../context/GlobalContext";
const BASEURL = "http://localhost:3000/api/relacionamentos";

const Amizades = () => {
  const { user } = useContext(GlobalContext);
  const [friends, setFriends] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${BASEURL}/friends/${user.id}`);
        setFriends(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    console.log("Friends: ", friends);
    // const fetchSuggestions = async () => {
    //   try {
    //     const response = await axios.get(`${BASEURL}/suggestions/${user.id}`);
    //     setSuggestions(response.data);
    //   } catch (error) {
    //     console.error("Error fetching suggestions:", error);
    //   }
    // };

    const fetchPendingRequests = async () => {
      try {
        const response = await axios.get(`${BASEURL}/pending/${user.id}`);
        setPendingRequests(response.data);
      } catch (error) {
        console.error("Error fetching pending requests:", error);
      }
    };

    fetchFriends();
    //fetchSuggestions();
    fetchPendingRequests();
  }, [user.id, friends]);

  const handleSendRequest = async (relacaoId) => {
    try {
      await axios.post(`${BASEURL}/send`, {
        userId: user.id,
        relacaoId,
      });
      // Optionally update UI or fetch new data
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };

  const handleAcceptRequest = async (id) => {
    try {
      await axios.put(`${BASEURL}/accept/${id}`);
      // Optionally update UI or fetch new data
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleDeleteRequest = async (id) => {
    try {
      await axios.delete(`${BASEURL}/delete/${id}`);
      // Optionally update UI or fetch new data
    } catch (error) {
      console.error("Error deleting friend request:", error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <h3>Amizades</h3>
        <div className={style.containerUser}>
          {friends.map((friend) => (
            <div className={style.user}>
              <div className={style.userInfo}>
                <img src={friend?.profile_picture} alt="" />
              </div>
              <div className={style.cardItem}>
                <span>{friend?.nome}</span>
                <button
                  className={style.buttonActive}
                  onClick={() => handleDeleteRequest(friend.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={style.container}>
        <h3>Pedidos de amizades</h3>
        <div className={style.containerUser}>
          {pendingRequests.map((request) => (
            <div className={style.user}>
              <div className={style.userInfo}>
                <img src={request?.user.profile_picture} alt="" />
              </div>
              <div className={style.cardItem}>
                <span>{request?.user.nome}</span>
                <button
                  className={style.buttonActive}
                  onClick={() => handleAcceptRequest(request.id)}
                >
                  Accept
                </button>
                <button
                  className={style.button}
                  onClick={() => handleDeleteRequest(request.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.container}>
        <h2>Friend Suggestions</h2>
        <div className={style.containerUser}>
          {suggestions.map((suggestion) => (
            <div className={style.user}>
              <div className={style.userInfo}>
                <img src={suggestion?.profile_picture} alt="" />
              </div>
              <div className={style.cardItem}>
                <span>{suggestion?.nome}</span>
                <button
                  className={style.button}
                  onClick={() => handleAcceptRequest(suggestion.id)}
                >
                  Accept
                </button>
                <button
                  className={style.button}
                  onClick={() => handleDeleteRequest(suggestion.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Amizades;
