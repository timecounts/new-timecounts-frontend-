import api from '../utils/axios'

const authService = {
    googleAuth: () => api.get('auth/google'),
    facebookAuth: () => api.get('auth/facebook'),
    login: payload => api.post('auth/login', payload),
    logout: payload => api.post('auth/logout', payload)
}

export default authService