import axios from 'axios';

const baseURL = 'https://rocketseat-node.herokuapp.com/api';
const api = axios.create({ 
    baseURL: baseURL
});

export default api;