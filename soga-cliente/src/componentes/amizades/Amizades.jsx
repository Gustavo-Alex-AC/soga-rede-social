import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Amizades.module.css";

import GlobalContext from "../../context/GlobalContext";
import Amizade from "./Amizade";
import usePedidos from "../../hooks/usePedidos";

const BASEURL = "http://localhost:3000/api/relacionamentos";

const Amizades = () => {
  const { user } = useContext(GlobalContext);
  const { pedidos, queryClient } = usePedidos();
  const [amizades, setAmizades] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [pedidoamizades, setPendingRequests] = useState([]);

  // async function fetchFriends(user) {
  //   try {
  //     const response = await axios.get(`${BASEURL}/friends/${user}`);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching friends:", error);
  //   }
  // }

  console.log(pedidos);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${BASEURL}/friends/${user.id}`);
        setAmizades(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
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

  // if (isLoadingFriends) return <Spinner />;
  // if (isErrorFriends) {
  //   return (
  //     <div>Error loading data: {<Erro mensagem={errorFriends?.message} />}</div>
  //   );
  // }

  return (
    <div className={style.container}>
      <div className={style.marginBotton}>
        <h3>Suas amizades</h3>
        <div className={style.containerUser}>
          {amizades?.length ? (
            amizades?.map((friend) => (
              <Amizade
                data={friend}
                handleDeleteRequest={handleDeleteRequest}
                key={friend.id}
              />
            ))
          ) : (
            <p style={{ marginTop: "10px", color: "gray" }}>Sem amizades...</p>
          )}
        </div>
      </div>

      <div className={style.marginBotton}>
        <h3>Pedidos de amizades</h3>
        <div className={style.containerUser}>
          {pedidos?.length ? (
            pedidos?.map((pedido) => (
              <Amizade
                data={pedido}
                handleDeleteRequest={handleDeleteRequest}
                handleAcceptRequest={handleAcceptRequest}
                key={pedido.id}
              />
            ))
          ) : (
            <p style={{ marginTop: "10px", color: "gray" }}>
              Nenhum pedido de amizade...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Amizades;

// const fetchSuggestions = async () => {
//   try {
//     const response = await axios.get(`${BASEURL}/suggestions/${user.id}`);
//     setSuggestions(response.data);
//   } catch (error) {
//     console.error("Error fetching suggestions:", error);
//   }
// };
