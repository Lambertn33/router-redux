import axios from 'axios';

const BACKEND_URL = "http://localhost:5000/auth";

const handlerAuthenticate = async(data, mode) => {
    return await axios.post(`${BACKEND_URL}/${mode}`, data);
}

export default handlerAuthenticate;