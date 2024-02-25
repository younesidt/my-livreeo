import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://livreeo.ma/API/public/api",
    timeout: 60000,
    headers: {
        Accept: "application/json"
    }
});

export default axios;