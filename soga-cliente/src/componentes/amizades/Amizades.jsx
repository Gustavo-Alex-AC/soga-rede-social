import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

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
  }, [user.id]);

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
    <div>
      <h1>Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            {friend.relacao.nome}
            <button onClick={() => handleDeleteRequest(friend.id)}>
              Unfriend
            </button>
          </li>
        ))}
      </ul>

      <h2>Pending Friend Requests</h2>
      <ul>
        {pendingRequests.map((request) => (
          <li key={request.id}>
            {request.user.nome}
            <button onClick={() => handleAcceptRequest(request.id)}>
              Accept
            </button>
            <button onClick={() => handleDeleteRequest(request.id)}>
              Decline
            </button>
          </li>
        ))}
      </ul>

      <h2>Friend Suggestions</h2>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            {suggestion.nome}
            <button onClick={() => handleSendRequest(suggestion.id)}>
              Send Friend Request
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amizades;
