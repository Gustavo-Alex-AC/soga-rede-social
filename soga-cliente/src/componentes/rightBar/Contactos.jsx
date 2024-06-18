import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

import Contacto from "./Contacto";
import axios from "axios";

const BASEURL = "http://localhost:3000/api/relacionamentos";

function Contactos() {
  const { user } = useContext(GlobalContext);
  const queryClient = useQueryClient();
  const [amizades, setAmizades] = useState([]);

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

  console.log("Friends: ", amizades);

  return (
    <>
      {amizades?.length ? (
        amizades?.map((contacto) => (
          <Contacto contacto={contacto} key={contacto.id} />
        ))
      ) : (
        <h2>Nenhum Contacto..</h2>
      )}
    </>
  );
}

export default Contactos;
