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

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${BASEURL}/friends/${user.id}`);
        setAmizades(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, [user.id]);

  return (
    <div className={style.container}>
      <div className={style.marginBotton}>
        <h3>Suas amizades</h3>
        <div className={style.containerUser}>
          {amizades?.length ? (
            amizades?.map((friend) => (
              <Amizade
                data={friend}
                key={friend.id}
                queryClient={queryClient}
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
            pedidos?.map((pedido) => <Amizade data={pedido} key={pedido.id} />)
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
