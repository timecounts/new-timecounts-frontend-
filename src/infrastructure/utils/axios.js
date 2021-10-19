import axios from 'axios'
import store from '../../application/store'

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1/'
})

api.interceptors.request.use((request) => {
    const auth = store.getState().auth;
    if (auth.tokens) request.headers.Authorization = `Bearer ${auth.tokens.accessToken}`;
    return request;
})

export default api