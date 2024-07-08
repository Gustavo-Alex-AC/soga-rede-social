import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

import Contacto from "./Contacto";
import axios from "axios";

const BASEURL = "http://localhost:3000/api/relacionamentos";

function Contactos() {
  const { user } = useContext(GlobalContext);
  const [amizades, setAmizades] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`${BASEURL}/friends/${user?.id}`);
        setAmizades(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };
    fetchFriends();
  }, [user?.id]);

  return (
    <>
      {amizades?.length ? (
        amizades?.map((contacto) => (
          <Contacto contacto={contacto} key={contacto.id} />
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "gray",
            fontSize: "0.9rem",
          }}
        >
          Nenhum Contacto...
        </p>
      )}
    </>
  );
}

export default Contactos;
