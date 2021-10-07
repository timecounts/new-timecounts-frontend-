import api from '../utils/axios'

const authService = {
    googleAuth: () => api.get('auth/google', {
        proxy: {
            host: 'localhost',
            port: 5000
        }
    }),
    facebookAuth: () => api.get('auth/facebook', {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    }),
    login: payload => api.post('auth/login', payload)
}

export default authService