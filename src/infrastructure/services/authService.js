import api from '../utils/axios'

const authService = {
    googleLogin: payload => api.post('auth/google', payload),
    googleSignup: payload => api.post('auth/signup/google', payload),
    facebookLogin: payload => api.post('auth/facebook', payload),
    facebookSignup: payload => api.post('auth/signup/facebook', payload),
    login: payload => api.post('auth/login', payload),
    logout: payload => api.post('auth/logout', payload),
    resendEmail: payload => api.post('/auth/resend-email', payload)
}

export default authService