import axios from "axios";

const BASEURL = "http://localhost:3000/api/relacionamentos";

export const fetchFriends = async (userId) => {
  try {
    const response = await axios.get(`${BASEURL}/friends/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pending requests:", error);
  }
};

export const fetchPendingRequests = async (userId) => {
  try {
    const response = await axios.get(`${BASEURL}/pending/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pending requests:", error);
  }
};

export const acceptRequest = async (requestId) => {
  try {
    const res = await axios.put(`${BASEURL}/accept/${requestId}`);
    return res.data;
  } catch (error) {
    console.error("Error accepting request:", error);
  }
};

export const deleteRequest = async (requestId) => {
  try {
    const res = await axios.delete(`${BASEURL}/delete/${requestId}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting request:", error);
  }
};
