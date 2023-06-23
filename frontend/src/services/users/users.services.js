import axios from "axios";

const BACKEND_URL = "http://localhost:5000/users";

const token = localStorage.getItem('token');

const handlerFetchUsers = async () => {
  return await axios.get(`${BACKEND_URL}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export default handlerFetchUsers;
