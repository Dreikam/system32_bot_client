const axiosInstance = require('axios');
const axios = axiosInstance.create({
    baseURL: "http://localhost:3000"
})
module.exports = {
    axios
}