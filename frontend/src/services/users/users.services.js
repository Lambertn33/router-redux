import axios from "axios";

const BACKEND_URL = "http://localhost:5000/users";

const token = localStorage.getItem('token');

const handleFetchUsers = async () => {
  return await axios.get(`${BACKEND_URL}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

const handleFetchSingleUser = async(userId) => {
  return await axios.get(`${BACKEND_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

const handleFetchUserPosts = async(userId) => {
  return await axios.get(`${BACKEND_URL}/${userId}/posts`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export  {
  handleFetchUsers,
  handleFetchSingleUser,
  handleFetchUserPosts
};
