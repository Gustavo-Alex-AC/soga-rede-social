import axios from "axios";

const BASEURL = "http://localhost:3000/api/users";

export const fetchUser = async (userId) => {
  try {
    const res = await axios.get(`${BASEURL}/${userId}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Handle error gracefully, e.g., display an error message to the user
    return null; // Or return a default value or handle based on your application's logic
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASEURL}`);
    /// console.log("users", response.data);
    return response.data;
  } catch (erro) {
    console.error("Erro carregando todos os users", erro);
    return null;
  }
};
