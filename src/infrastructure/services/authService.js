import api from '../utils/axios'

const authService = {
    googleAuth: (payload) => api.post('auth/google', payload),
    facebookAuth: (payload) => api.post('auth/facebook', payload),
    login: payload => api.post('auth/login', payload)
}

export default authService