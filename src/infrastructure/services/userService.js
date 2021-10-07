import api from '../utils/axios'

const userService = {
    signupUser: payload => api.post('/user/signup', payload)
}

export default userService
