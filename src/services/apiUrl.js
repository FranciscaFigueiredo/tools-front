import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pluga.co'
});

export default instance;
