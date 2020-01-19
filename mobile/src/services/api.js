import axios from 'axios';

const api = axios.create({
    baseURL: 'http://zh-2ns.anonymous.mobile.exp.direct/',
});

export default api;